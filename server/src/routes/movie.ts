import { Router } from "express";
import MovieController from "../controller/MovieConrtoller";
const router = Router();

router.post("/newFavMovie", MovieController.newFavMovie);
router.delete(/:id/, MovieController.deleteFavMovie);
router.get("/getAllMovies", MovieController.getAllMoviesByUser);

export default router;
