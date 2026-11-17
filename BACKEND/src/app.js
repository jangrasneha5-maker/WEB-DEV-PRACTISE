
import express from "express";

// Import routes
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";

// Create Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Export application
export default app;
