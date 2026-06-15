import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} from "../controller/blog_Controller.js";
import { protect } from '../middleware/authmiddleware.js'
import { restrictedTo } from "../middleware/role_middleware.js"
import { loginUser } from "../controller/User_login.js";
import { userSignup } from "../controller/User_signup.js";

const router = express.Router();

// Public
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

router.post('/login',loginUser);
router.post('/signup',userSignup)



router.post("/blog", protect, restrictedTo("author", "admin"), createBlog);
router.put("/:id", protect, restrictedTo("author", "admin"), updateBlog);
router.delete("/:id", protect, restrictedTo("author", "admin"), deleteBlog);

export default router;