import { Router } from "express";
import MovieController from "../controller/MovieConrtoller";
const router = Router();

router.post("/newFavMovie", MovieController.newFavMovie);
router.post("/visibleToggle", MovieController.visibleToggle); 
router.get("/getAllMovies", MovieController.getAllMoviesByUser);
export default router;
