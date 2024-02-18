import { Router } from "express";

import MoviesRoutes from "./movieRoute.js"; 

import CastRoutes from "./castRoute.js";

const router = Router();

// for movie routes
router.use("/api/movie", MoviesRoutes);

// for cast routes
router.use("/api/cast", CastRoutes);

export default router;