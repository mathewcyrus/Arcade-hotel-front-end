import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  UpdateEvent,
} from "../Controllers/event.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING A EVENT
router.post("/", verifyToken, verifyAdmin, createEvent);
// UPDATING A EVENT
router.put("/:id", verifyToken, verifyAdmin, UpdateEvent);
// DELETING A EVENT
router.delete("/:id", verifyToken, verifyAdmin, deleteEvent);
// GETTING A EVENT
router.get("/:id", getEvent);
// GETTING ALL EVENTS
router.get("/", getAllEvents);

export default router;
