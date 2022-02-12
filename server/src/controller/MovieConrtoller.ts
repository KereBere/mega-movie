import { User } from "../entity/User";
import { Movie } from "../entity/Movie";
import { RequestHandler } from "express";

class MovieController {
  public static newFavMovie: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log("hhehe");
    const { id, title, overview, poster_path, backdrop_path, release_date } =
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
      where: { user: user, id: id },
    });
    if (moviebDB) {
      try {
        await Movie.delete(moviebDB);
        const favMovies = await Movie.find({ where: { user: user } });

        return res
          .status(200)
          .json({ favMovies, success: true, true: "Movie removed from favs" });
      } catch (error) {
        console.log(error);
      }
    }
    const movie = new Movie();
    movie.id = id;
    movie.title = title;
    movie.overview = overview;
    movie.poster_path = poster_path;
    movie.backdrop_path = backdrop_path;
    movie.release_date = release_date;
    movie.user = user;
    try {
      await Movie.save(movie);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, error: "Sorry, we could not save the movie" });
    }
    try {
      const favMovies = await Movie.find({ where: { user: user } });
      res.status(201).json({
        favMovies,
        success: true,
        message: "Movie saved to favorites",
      });
    } catch (error) {
      console.log(error);
    }
  };
  public static visibleToggle: RequestHandler = async (req, res) => {
    console.log(req.body);
    const { movieuuid, user } = req.body;
    let movie;
    let isVisible;
    try {
      movie = await Movie.findOneOrFail(movieuuid);
    } catch (error) {
      console.log(error);
    }
    movie.isVisible == true ? (isVisible = false) : (isVisible = true);
    console.log(isVisible);
    try {
      await Movie.createQueryBuilder()
        .update(Movie)
        .set({ isVisible: isVisible })
        .where("uuid= :uuid", { uuid: movieuuid })
        .execute();
    } catch (error) {
      console.log(error);
    }
    const favMovies = await Movie.find({ where: { user: user } });
    res.status(201).json({ favMovies });
  };

  public static getAllMoviesByUser: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log(currentUserId);
    const movies: Movie[] = await Movie.find({
      where: { user: currentUserId },
    });
    console.log(movies);
  };
  public static getFavMovies: RequestHandler = async (req, res) => {
    let movies;
    try {
      movies = await Movie.find();
    } catch (error) {}
    console.log(movies);
  };
}

export default MovieController;
