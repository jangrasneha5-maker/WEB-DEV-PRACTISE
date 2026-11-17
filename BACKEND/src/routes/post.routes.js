
import { Router } from "express";

import { createPost } from "../controllers/post.controllers.js";

const router = Router();

router.post("/create", createPost);

export default router;
