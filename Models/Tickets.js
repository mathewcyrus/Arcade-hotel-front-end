import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    eventname: {
      type: String,
      required: true,
    },
    eventdate: {
      type: String,
      required: true,
    },
    eventtime: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      default: null,
    },
    ticketprice: {
      type: String,
      required: true,
    },
    totalprice: {
      type: String,
      required: true,
    },
    tickettype: {
      type: String,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", TicketSchema);
