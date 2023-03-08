import Event from "../Models/Event.js";

export const createEvent = async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find(req.params.id);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err);
  }
};
