import { Router } from "express";

import { deleteMovie, getMovies, moviePage, searchMovie, store, updateMovie } from "../controllers/MovieControllers.js";

const router = Router();

// for getting all the movies
router.get("/", getMovies);

// for creating new movie
router.post("/", store);

// update movie
router.put("/:id", updateMovie);

//delete movie
router.delete("/delete/:id", deleteMovie);

// get movies data by pagination
router.get("/with/page", moviePage);

// search feature
router.get("/by/search", searchMovie);

export default router;