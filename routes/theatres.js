import express from "express";
import {
  createTheatre,
  deleteTheatre,
  getAllTheatres,
  getTheatre,
  UpdateTheatre,
} from "../Controllers/theatre.js";

import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATING A THEATRE
router.post("/", verifyAdmin, createTheatre);
// UPDATING A THEATRE
router.put("/:id", verifyAdmin, UpdateTheatre);
// DELETING A THEATRE
router.delete("/:id", verifyAdmin, deleteTheatre);
// GETTING A THEATRE
router.get("/:id", getTheatre);
// GETTING ALL THEATREs
router.get("/", getAllTheatres);

export default router;
