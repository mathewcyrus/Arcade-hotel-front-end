import express from "express";
import {
  createRoom,
  deleteAllRooms,
  deleteRoom,
  getAllReservedRooms,
  getAllRooms,
  getRoom,
  reserveRoom,
  UpdateRoom,
} from "../Controllers/room.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATING A ROOM
router.post("/", verifyToken, verifyAdmin, createRoom);
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
// RESERVING A ROOM
router.put("/update/reserve", reserveRoom);
//GET ALL RESERVED ROOMS
router.get("/reserved/allrooms", getAllReservedRooms);

export default router;
