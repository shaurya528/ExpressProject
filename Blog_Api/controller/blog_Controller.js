import postModel from "../model/blogSchema.js";
import commentModel from "../model/commentSchema.js";
import { slugGenerator } from "../services/Slug_generator.js";

export const createBlog = async (req, res) => {
  const { title, content, summary, tags } = req.body;
  const author = req.user.id;
  try {
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }
    const slug = slugGenerator(title);
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
      blog: newBlog.toObject()
    });
  } catch (error) {
    console.error("Create blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const blogs = await postModel
      .find()
      .populate("author", "username email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await postModel.countDocuments();
    res.status(200).json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      blogs
    });
  } catch (error) {
    console.error("Get all blogs error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await postModel
      .findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
      .populate("author", "username email")
      .populate({
        path: "comments",
        populate: { path: "user", select: "username" }
      });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      success: true,
      blog: blog.toObject()
    });
  } catch (error) {
    console.error("Get blog by id error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, summary, tags } = req.body;
    const userId = req.user.id;
    const userRole = req.user.role;
    const blog = await postModel.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.author.toString() !== userId && userRole !== "admin") {
      return res.status(403).json({ message: "Not authorized to update this blog" });
    }
    let slug = blog.slug;
    if (title && title !== blog.title) {
      slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const slugExists = await postModel.findOne({ slug, _id: { $ne: id } });
      if (slugExists) {
        return res.status(400).json({ message: "Another blog with this title exists" });
      }
    }
    const updatedBlog = await postModel.findByIdAndUpdate(
      id,
      {
        title: title || blog.title,
        slug,
        content: content || blog.content,
        summary: summary || blog.summary,
        tags: tags || blog.tags
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated",
      blog: updatedBlog.toObject()
    });
  } catch (error) {
    console.error("Update blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const userRole = req.user.role;
    const blog = await postModel.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.author.toString() !== userId && userRole !== "admin") {
      return res.status(403).json({ message: "Not authorized to delete this blog" });
    }
    await postModel.findByIdAndDelete(id);
    await commentModel.deleteMany({ post: id });
    res.status(200).json({
      success: true,
      message: "Blog and its associated comments deleted successfully"
    });
  } catch (error) {
    console.error("Delete blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};