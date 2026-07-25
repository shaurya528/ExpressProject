import express from "express";
import login from "../controller/login.js";
import signup from "../controller/signup.js";

const router = express.Router();

// Public routes - no authentication needed
router.post("/login", login);
router.post("/register", signup);

export default router;