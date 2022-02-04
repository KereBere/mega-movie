// import { Comment } from "../entity/User";
// import { Movie } from "../entity/Movie";
// import { RequestHandler } from "express";

// class CommentController {
//   public static newComment: RequestHandler = async (req, res) => {
//     const currentUser = req.session.userId;
//     let user;
//     try {
//       user = await User.findOneOrFail(currentUser);
//     } catch (error) {
//       return res.status(404).send("User not found, log in");
//     }
//     const movieId = req.body.movieId;
//     const movie = new Movie();
//     movie.movieId = movieId;
//     movie.user = user;
//     try {
//       await Movie.save(movie);
//     } catch (error) {
//       console.log("movie could not saved");
//       return res.status(500).send("Sorry, we could not save the movie");
//     }
//     res.status(201).send("Movie saved to favorites");
//   };
// }

// export default MovieController;
