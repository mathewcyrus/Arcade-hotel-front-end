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
    type: Number,
  },
  photos: {
    type: [String],
  },
  extrafeatures: {
    type: [String],
  },
  bookedDates: [
    {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
  bookingoptions: [
    {
      bedroom: {
        type: String,
      },
      adults: {
        type: Number,
      },
      children: {
        type: Number,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Room", RoomSchema);
