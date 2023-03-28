import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    customer: {
      customerName: {
        type: String,
        required: true,
      },
      customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    ReservedRoom: {
      roomNumber: {
        type: mongoose.Schema.Types.Number,
        ref: "Room",
        required: true,
      },
      roomcategory: {
        type: String,
      },
      roomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
      },
    },
    ReservationsDates: [
      {
        startDate: {
          type: Date,
          default: null,
        },
        endDate: {
          type: Date,
          default: null,
        },
      },
    ],
    bookingoptions: [
      {
        bedrooms: {
          type: String,
          default: "1 bedroom",
        },
        adults: {
          type: Number,
          default: 1,
        },
        children: {
          type: Number,
          default: 0,
        },
      },
    ],
    totaldays: {
      type: Number,
      default: 0,
    },
    cancellationStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);
