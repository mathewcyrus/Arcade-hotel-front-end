import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import roomRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import dishRoute from "./routes/dishes.js";
import orderRoute from "./routes/orders.js";
import testimonialRoute from "./routes/testimonials.js";
import eventsRoute from "./routes/events.js";
import ticketsRoute from "./routes/tickets.js";
import enquiryRoute from "./routes/enquiry.js";
import reservationsRoute from "./routes/reservation.js";
import messagesRoute from "./routes/messages.js";
import Message from "./Models/Message.js";
import Chat from "./Models/Chat.js";
import { socketConnection } from "./Socket.js";

dotenv.config();
const app = express();

// Create a server with the express app
const server = http.createServer(app);

// Create a new Socket.io server instance
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
// Set up event listeners for incoming connections to the Socket.io server
io.on("connection", socketConnection(Message, Chat, io));

// Connecting the mongo db databse
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/arcadeHotel");
    console.log("connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};
mongoose.connection.on("disconnection", () => {
  console.log("disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("connected");
});

//MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/dishes", dishRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/events", eventsRoute);
app.use("/api/testimonials", testimonialRoute);
app.use("/api/tickets", ticketsRoute);
app.use("/api/reservations", reservationsRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/enquiries", enquiryRoute);

server.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
