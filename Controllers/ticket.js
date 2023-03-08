import Ticket from "../Models/Tickets.js";

export const createTicket = async (req, res) => {
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    res.status(200).json(savedTicket);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const UpdateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json("Ticket has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find(req.params.id);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
};
