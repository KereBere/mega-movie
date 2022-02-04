import { Router } from "express";
import MovieController from "../controller/MovieConrtoller";
const router = Router();

router.post("/newFavMovie", MovieController.newFavMovie);
router.get("/getAllMovies", MovieController.getAllMovies);

export default router;
