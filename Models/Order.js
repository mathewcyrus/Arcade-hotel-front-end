import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderdate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    paymentmethod: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    product: [
      {
        productimage: {
          type: String,
          default: null,
        },
        productname: {
          type: String,
          required: true,
        },
        productquantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
