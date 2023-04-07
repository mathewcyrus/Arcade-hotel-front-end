import express from "express";
import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  getEnquiry,
  UpdateEnquiry,
} from "../Controllers/enquiries.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING an Enquiry
router.post("/", verifyToken, createEnquiry);
// UPDATING an Enquiry
router.put("/:id", verifyToken, verifyAdmin, UpdateEnquiry);
// DELETING an Enquiry
router.delete("/:id", verifyToken, verifyAdmin, deleteEnquiry);
// GETTING an Enquiry
router.get("/:id", getEnquiry);
// GETTING ALL Enquiries
router.get("/", getAllEnquiries);

export default router;
