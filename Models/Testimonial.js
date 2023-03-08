import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    testimonial: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", TestimonialSchema);
