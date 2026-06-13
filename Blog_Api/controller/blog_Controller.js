import postModel from "../model/blogSchema.js";
import { slugGenerator } from "../services/Slug_generator.js";
export const createBlog=async(req,res)=>{
const   { title, content, summary, tags } = req.body;
const author= req.user.id;
try{
if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
   const slug=slugGenerator(title);
   const existing = await postModel.findOne({ slug });
   if (existing) {
     return res.status(400).json({ message: "A blog with this title already exists" });
   }
   const newBlog = await postModel.create({
    title,
    slug,
    content,
    summary: summary || content.substring(0, 150),
    author,
    tags: tags || [],
    views: 0
  });
  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog: { ...newBlog.toObject()}
  });
} catch (error) {
  console.error("Create blog error:", error);
  res.status(500).json({ message: "Internal server error" });
}
}
