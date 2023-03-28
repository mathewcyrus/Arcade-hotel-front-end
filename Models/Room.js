import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  customerID: {
    type: String,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  floor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: String,
  },
  avatar: {
    type: String,
  },
  extraimages: {
    type: [String],
  },
  extrafeatures: {
    type: [String],
  },
  price: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Room", RoomSchema);
