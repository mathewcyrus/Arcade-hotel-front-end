import express from "express";
import {
  createRoom,
  deleteAllRooms,
  deleteRoom,
  getAllRooms,
  getRoom,
  UpdateRoom,
} from "../Controllers/room.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATING A ROOM
router.post("/", createRoom);
// UPDATING A ROOM
router.put("/:id", verifyToken, verifyAdmin, UpdateRoom);
// DELETING A ROOM
router.delete("/:id", verifyToken, verifyAdmin, deleteRoom);
//DELETES ALL ROOMS
router.delete("/allrooms/deletion", deleteAllRooms);
// GETTING A ROOM
router.get("/:id", getRoom);
// GETTING ALL ROOMS
router.get("/", getAllRooms);

export default router;
