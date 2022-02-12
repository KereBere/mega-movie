import { Router } from "express";
import CommentController from "../controller/CommentController";
const router = Router();

router.post("/newcomment", CommentController.newComment);

export default router;
