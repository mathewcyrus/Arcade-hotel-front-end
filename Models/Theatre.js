import mongoose from "mongoose";

const TheatreSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  floor: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  extrafeatures: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Theatre", TheatreSchema);
