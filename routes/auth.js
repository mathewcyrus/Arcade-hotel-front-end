import express from "express";
import { registerUser, userLogin } from "../Controllers/auth.js";
const router = express.Router();

//REGISTERING A USER
router.post("/register", registerUser);
router.post("/login", userLogin);
export default router;
