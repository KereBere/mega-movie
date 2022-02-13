import { User } from "../entity/User";
import { Comment } from "../entity/Comment";
import { Movie } from "../entity/Movie";
import { RequestHandler } from "express";

class CommentController {
  public static newComment: RequestHandler = async (req, res) => {
    const { comment, movieId, commentor } = req.body;
    let dbMovie;
    console.log("com init");
    try {
      dbMovie = await Movie.findOneOrFail(movieId);
    } catch (error) {
      console.log(error);
    }
    const dbComment = new Comment();
    dbComment.comment = comment;
    dbComment.commentor = commentor;
    dbComment.movie = dbMovie;
    try {
      await Comment.save(dbComment);
    } catch (err) {
      console.log(err);
    }
    let commentsByMovie;
    try {
      commentsByMovie = await Comment.find({ where: { movie: movieId } });
    } catch (err) {
      console.log(err);
    }
    res.status(201).json({ success: true, commentsByMovie });
  };

  public static getAllCommentsByMovie: RequestHandler = async (req, res) => {
    const movieUuid = req.body.movieId;
    let commentsByMovie;
    try {
      commentsByMovie = await Comment.find({ where: { movie: movieUuid } });
    } catch (err) {
      console.log(err);
    }
    res.status(201).json({ success: true, commentsByMovie });
  };
}

export default CommentController;
