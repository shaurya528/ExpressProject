// controllers/fileController.js
import File from "../Model/FileDetail.js";
import { generateUploadUrl,generateDownloadUrl } from "../services/awsS3operation.js";
import { v4 as uuidv4 } from "uuid";

export const requestUploadUrl = async (req, res) => {
  try {
    const { originalName, mimeType, folder, isPublic } = req.body;

    if (!originalName || !mimeType) {
      return res.status(400).json({ msg: "originalName and mimeType required" });
    }

    const key = `${folder || "general"}/${uuidv4()}-${originalName}`;
    const uploadUrl = await generateUploadUrl(key, mimeType);

    // Save pending record
    const newFile = new File({
      userId: req.user.id,
      originalName,
      key,
      bucket: process.env.AWS_S3_BUCKET_NAME,
      region: process.env.AWS_REGION,
      mimeType,
      folder: folder || "general",
      isPublic: isPublic || false,
      status: "uploading",
    });
    await newFile.save();

    res.status(201).json({
      fileId: newFile._id,
      uploadUrl, // this is the presigned PUT URL
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getFile = async (req, res) => {
    try {
      const file = await File.findOne({ _id: req.params.id, userId: req.user.id });
      if (!file) return res.status(404).json({ msg: "File not found" });
  
      if (file.status !== "completed") {
        return res.status(409).json({ msg: "File upload not complete" });
      }
  
      let downloadUrl;
      if (file.isPublic) {
        downloadUrl = `https://${file.bucket}.s3.${file.region}.amazonaws.com/${file.key}`;
      } else {
        downloadUrl = await generateDownloadUrl(file.key);
      }
  
      res.json({ file, downloadUrl });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error" });
    }
  };
  