import { HeadObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../Config/S3client.js";

export const confirmUpload = async (req, res) => {
  try {
    const file = await File.findOne({ _id: req.params.id, userId: req.user.id });
    if (!file) return res.status(404).json({ msg: "File not found" });
    if (file.status === "completed") return res.status(400).json({ msg: "Already confirmed" });

    // Verify file exists in S3 and get its size
    const headCommand = new HeadObjectCommand({
      Bucket: file.bucket,
      Key: file.key,
    });
    const headData = await s3Client.send(headCommand);

    file.status = "completed";
    file.size = headData.ContentLength;
    await file.save();

    res.json({ msg: "Upload confirmed", file });
  } catch (err) {
    if (err.name === "NotFound" || err.$metadata?.httpStatusCode === 404) {
      // Mark as failed
      const file = await File.findOne({ _id: req.params.id, userId: req.user.id });
      if (file) {
        file.status = "failed";
        await file.save();
      }
      return res.status(404).json({ msg: "File not found in S3. Upload may have failed." });
    }
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};