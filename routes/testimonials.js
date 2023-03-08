import express from "express";
import {
  createTestimonial,
  deleteTestimonial,
  getAllTestimonials,
  getAllTestimonialsForAdmin,
  getTestimonial,
  UpdateTestimonial,
} from "../Controllers/Testimonial.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATING A Testimonial
router.post("/", createTestimonial);
// UPDATING A Testimonial
router.put("/:id", verifyToken, verifyAdmin, UpdateTestimonial);
// DELETING A Testimonial
router.delete("/:id", verifyToken, verifyAdmin, deleteTestimonial);
// GETTING A Testimonial
router.get("/find/:id", getTestimonial);
// GETTING ALL TestimonialS
router.get("/", getAllTestimonials);
// GETTING ALL TestimonialS for the admin

router.get("/admin", verifyToken, verifyAdmin, getAllTestimonialsForAdmin);

export default router;
