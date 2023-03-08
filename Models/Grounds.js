import mongoose from "mongoose";

const GroundSchema = new mongoose.Schema(
  {
    groundname: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    extrafeatures: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ground", GroundSchema);
