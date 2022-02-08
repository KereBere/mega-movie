import { User } from "../entity/User";
import { Comment } from "../entity/Comment";
import { Movie } from "../entity/Movie";
import { RequestHandler } from "express";

class CommentController {
  public static newComment: RequestHandler = async (req, res) => {
    const currentMovieId = req.params.Id;
    const currentUserId = req.session.userId;
    let movie: Movie;
    try {
      movie = await Movie.findOneOrFail(currentMovieId);
    } catch (error) {
      res.status(404).send("Movie not found");
      return;
    }
    let user;
    try {
      user = User.findOneOrFail(currentUserId);
    } catch (error) {
      res.status(404).send("user not found");
    }
    const { text } = req.body;
    const comment = new Comment();
    comment.user = user;
    comment.movie = movie;
    comment.comment = text;

    try {
      await Comment.save(comment);
    } catch (error) {
      res.status(500).send("Sorry, something weng wrong");
    }
    res.status(201).send("Comment created");
  };
}

export default CommentController;
