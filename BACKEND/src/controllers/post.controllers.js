
import { Post } from "../Models/posts.model.js";

const createPost = async (req, res) => {
    try {
        const { title, content, owner } = req.body;

        // Basic validation
        if (!title || !content || !owner) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        // Create post
        const post = await Post.create({
            title,
            content,
            owner
        });

        return res.status(201).json({
            message: "Post created successfully!",
            post
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

export { createPost };
