import express from "express";
import {
  createReservation,
  deleteReservation,
  getAllReservations,
  getReservation,
  UpdateReservation,
} from "../Controllers/reservations.js";

import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING A Reservation
router.post("/", createReservation);
// UPDATING A Reservation
router.put("/:id", verifyAdmin, UpdateReservation);
// DELETING A Reservation
router.delete("/:id", deleteReservation);
// GETTING A Reservation
router.get("/:id", getReservation);
// GETTING ALL ReservationS
router.get("/", getAllReservations);

export default router;
