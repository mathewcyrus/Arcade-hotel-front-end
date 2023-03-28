import express from "express";
import {
  createDish,
  deleteDish,
  getAllDishes,
  getDish,
  UpdateDish,
} from "../Controllers/dish.js";
import { verifyAdmin, verifyToken } from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING A Dish
router.post("/", createDish);
// UPDATING A Dish
router.put("/:id", verifyToken, verifyAdmin, UpdateDish);
// DELETING A Dish
router.delete("/:id", verifyToken, verifyAdmin, deleteDish);
// GETTING A Dish
router.get("/:id", getDish);
// GETTING ALL DishS
router.get("/", getAllDishes);

export default router;
