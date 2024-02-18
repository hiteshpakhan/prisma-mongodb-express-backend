import { Router } from "express";

import { deleteCast, getCasts, createCast, updateCast } from "../controllers/CastController.js";

const router = Router();

// for getting all the Casts
router.get("/", getCasts);

// for creating new cast
router.post("/", createCast);

// update cast
router.put("/:id", updateCast);

//delete movie
router.delete("/delete/:id", deleteCast);

export default router;