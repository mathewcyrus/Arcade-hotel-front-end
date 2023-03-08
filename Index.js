import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import roomRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import dishRoute from "./routes/dishes.js";
import orderRoute from "./routes/orders.js";
import testimonialRoute from "./routes/testimonials.js";
import eventsRoute from "./routes/events.js";
import ticketsRoute from "./routes/tickets.js";

dotenv.config();
const app = express();
// process.env.DATABASE_URL)
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/arcadeHotel");
    console.log("connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};
// const User = mongoose.model("User");

// User.deleteMany({}, function (err) {
//   if (err) return handleError(err);
// });
mongoose.connection.on("disconnection", () => {
  console.log("disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("connected");
});

//MIDDLEWARES
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/dishes", dishRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/events", eventsRoute);
app.use("/api/testimonials", testimonialRoute);
app.use("/api/tickets", ticketsRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
