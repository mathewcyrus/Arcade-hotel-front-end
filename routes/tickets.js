import express from "express";
import {
  createTicket,
  deleteTicket,
  getAllTickets,
  getTicket,
  UpdateTicket,
} from "../Controllers/ticket.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATING A Ticket
router.post("/", createTicket);
// UPDATING A Ticket
router.put("/:id", verifyToken, verifyAdmin, UpdateTicket);
// DELETING A Ticket
router.delete("/:id", verifyToken, verifyAdmin, deleteTicket);
// GETTING A Ticket
router.get("/:id", getTicket);
// GETTING ALL TicketS
router.get("/", getAllTickets);

export default router;
