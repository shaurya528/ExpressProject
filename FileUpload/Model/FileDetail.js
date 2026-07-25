// models/File.js
import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  originalName: { type: String, required: true },
  key: { type: String, required: true, unique: true },
  bucket: { type: String, required: true },
  region: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, default: 0 },
  folder: { type: String, default: "general" },
  isPublic: { type: Boolean, default: false },
  status: { type: String, enum: ["uploading", "completed", "failed"], default: "uploading" },
}, { timestamps: true });

export default mongoose.model("File", fileSchema);