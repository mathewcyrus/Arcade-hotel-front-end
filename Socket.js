export function socketConnection(Message, Chat, io) {
  return async (socket) => {
    // Create a new chat and emit the roomId to the client
    const { client, admin } = socket.handshake.query;
    const roomId = client + "-" + admin;
    const chat = new Chat({ roomId, client, admin });
    await chat.save();
    io.to(socket.id).emit("roomId", roomId);

    // Listen for new messages and creating new message to the database
    socket.on("message", async (data) => {
      const { sender, message } = data;
      try {
        const m = new Message({ sender, message, chat: chat._id });
        const savedMessage = await m.save();
        chat.messages.push(savedMessage);
        await chat.save();
        io.emit("message", savedMessage);
      } catch (error) {
        console.error(error);
      }
    });
  };
}
