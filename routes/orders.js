import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getAllOrdersForCustomer,
  getOrder,
  UpdateOrder,
} from "../Controllers/order.js";

import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();
// CREATING A Order
router.post("/", createOrder);
// UPDATING A Order
router.put("/:id", verifyAdmin, UpdateOrder);
// DELETING A Order
router.delete("/:id", deleteOrder);
// GETTING A Order
router.get("/:id", getOrder);
// GETTING ALL OrderS
router.get("/", getAllOrders);
router.get("/customer/orders", getAllOrdersForCustomer);

export default router;
