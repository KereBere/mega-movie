import { User } from "../entity/User";
import { Movie } from "../entity/Movie";
import { RequestHandler } from "express";

class MovieController {
  public static newFavMovie: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;

    const { movieId, originalTile, overview, posterPath, backdropPath } =
      req.body;
    let user;
    try {
      user = await User.findOneOrFail(currentUserId);
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: "Please sign in for adding your fav movies.",
      });
    }
    const moviebDB = await Movie.findOne({
      where: { user: user, movieId: movieId },
    });
    if (moviebDB) {
      Movie.delete(moviebDB);
      return res
        .status(200)
        .json({ success: true, true: "Movie removed from favs" });
    }
    const movie = new Movie();
    movie.movieId = movieId;
    movie.originalTile = originalTile;
    movie.overview = overview;
    movie.posterPath = posterPath;
    movie.backdropPath = backdropPath;
    movie.user = user;
    try {
      await Movie.save(movie);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, error: "Sorry, we could not save the movie" });
    }
    res
      .status(201)
      .json({ success: true, message: "Movie saved to favorites" });
  };
  // public static deleteFavMovie: RequestHandler = (req, res) => {
  //   const id = req.params.id;
  //   let movie;
  //   try {
  //     movie = Movie.findOneOrFail(id);
  //   } catch (error) {
  //     res.status(404).send("Can not delete from favorite movies");
  //   }
  //   Movie.delete(id);
  //   res.status(200).send("post deleted");
  // };

  public static getAllMoviesByUser: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log(currentUserId);
    const movies: Movie[] = await Movie.find({
      where: { user: currentUserId },
    });
    console.log(movies);
  };
  public static getFavMovies: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log(currentUserId);
    const movies: Movie[] = await Movie.find({
      where: { user: currentUserId },
    });
    console.log(movies);
  };
}

export default MovieController;
