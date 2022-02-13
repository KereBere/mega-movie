import { Router } from "express";
import CommentController from "../controller/CommentController";
const router = Router();

router.post("/newcomment", CommentController.newComment);
router.post("/getallcommentsbymovie", CommentController.getAllCommentsByMovie);


export default router;
