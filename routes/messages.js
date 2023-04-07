import express from "express";
import {
  deleteMessage,
  getAllMessages,
  getMessage,
  UpdateMessage,
} from "../Controllers/message.js";

import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

// UPDATING A Message
router.put("/:id", UpdateMessage);
// DELETING A Message
router.delete("/:id", deleteMessage);
// GETTING A Message
router.get("/:id", getMessage);
// GETTING ALL MessageS
router.get("/", getAllMessages);

export default router;
