import express from "express";
import {
  createGround,
  deleteGround,
  getAllGrounds,
  getGround,
  UpdateGround,
} from "../Controllers/ground";

import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING A GROUND
router.post("/", verifyAdmin, createGround);
// UPDATING A GROUND
router.put("/:id", verifyAdmin, UpdateGround);
// DELETING A GROUND
router.delete("/:id", verifyAdmin, deleteGround);
// GETTING A GROUND
router.get("/:id", getGround);
// GETTING ALL GROUNDS
router.get("/", getAllGrounds);

export default router;
