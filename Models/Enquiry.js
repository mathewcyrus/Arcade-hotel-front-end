import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      default: null,
    },
    amenityType: {
      type: String,
    },
    checkindates: {
      type: Date,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    expectedpeople: {
      type: String,
    },
    numberofyears: {
      type: String,
    },
    officetype: {
      type: String,
    },
    groundname: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", EnquirySchema);
