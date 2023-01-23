import express from "express";
import { getAllBlogs,addBlog,updateBlog,getById,deleteBlog,getByUserId } from "../controllers/blog-controller";

//can't rename router because it will have conflicts with the router of user 
const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog); // put req is used to update the user
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId);

export default blogRouter;
