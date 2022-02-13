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
    console.log(req.body);
    console.log(dbMovie);
    const dbComment = new Comment();
    dbComment.comment = comment;
    dbComment.commentor = commentor;
    dbComment.movie = dbMovie;
    try {
      await Comment.save(dbComment);
    } catch (err) {
      console.log(err);
    }
  };

  public static getAllCommentsByMovie : RequestHandler =(req, res) => {
     
  } 
}

export default CommentController;
