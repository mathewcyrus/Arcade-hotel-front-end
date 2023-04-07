import Message from "../Models/Message.js";

export const createMessage = async (req, res) => {
  const newmessage = new Message(req.body);
  try {
    const savedmessage = await newmessage.save();
    res.status(200).json(savedmessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateMessage = async (req, res) => {
  try {
    const updatedmessage = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedmessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("Message has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find(req.params.id);
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
