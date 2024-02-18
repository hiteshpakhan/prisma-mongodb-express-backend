import { Router } from "express";

import { deleteMovie, getMovies, store, updateMovie } from "../controllers/MovieControllers.js";

const router = Router();

// for getting all the movies
router.get("/", getMovies);

// for creating new movie
router.post("/", store);

// update movie
router.put("/:id", updateMovie);

//delete movie
router.delete("/delete/:id", deleteMovie);

export default router;