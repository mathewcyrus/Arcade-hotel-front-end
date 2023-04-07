import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      // unique: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", ChatSchema);
