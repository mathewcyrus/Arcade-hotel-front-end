import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    default: null,
  },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ticketprice: {
    type: String,
    required: true,
  },
  invited: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Event", EventSchema);
