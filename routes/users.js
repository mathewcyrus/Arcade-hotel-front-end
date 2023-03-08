import express, { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  UpdateUser,
} from "../Controllers/users.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.status(200).send("you are an admin");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.status(200).send("hello user");
});

// UPDATING A USER
router.put("/:id", verifyUser, UpdateUser);
// DELETING A USER
router.delete("/:id", deleteUser);
// GETTING A USER
router.get("/:id", getUser);
// GETTING ALL USERS
router.get("/", getAllUsers);

export default router;
