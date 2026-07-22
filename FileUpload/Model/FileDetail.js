import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    originalName: {
      type: String,
      required: [true, "Original file name is required"],
      trim: true,
    },
    key: {
      type: String,
      required: [true, "S3 key is required"],
      unique: true,
      trim: true,
    }, // S3 object key
    bucket: {
      type: String,
      required: [true, "S3 bucket is required"],
      trim: true,
    },
    region: {
      type: String,
      required: [true, "S3 region is required"],
      trim: true,
    },
    mimeType: {
      type: String,
      required: [true, "MIME type is required"],
      trim: true,
    },
    size: {
      type: Number,
      required: [true, "File size in bytes is required"],
      min: [0, "File size cannot be negative"],
    },
    folder: {
      type: String,
      default: "general",
      trim: true,
      lowercase: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Indexes
FileSchema.index({ userId: 1, folder: 1 });
FileSchema.index({ originalName: "text" });

export default mongoose.models.File || mongoose.model("File", FileSchema);