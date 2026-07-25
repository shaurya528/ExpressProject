import express from "express";
import { protect } from "../Middleware/AuthMiddleware.js";
import {
  requestUploadUrl,
  getFile,           // returns metadata + download URL
} from "../controller/FileController.js"
import {confirmUpload} from  "../controller/confirmUpload.js"

const router = express.Router();

router.post("/upload-url", protect, requestUploadUrl);
router.post("/:id/confirm", protect, confirmUpload);

router.get("/:id", protect, getFile);



export default router;