import mongoose from "mongoose";

const DishSchema = new mongoose.Schema(
  {
    mealname: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
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
  },
  { timestamps: true }
);

export default mongoose.model("Dish", DishSchema);
