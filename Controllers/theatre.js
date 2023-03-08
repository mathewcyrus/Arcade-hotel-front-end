import Theatre from "../Models/Theatre.js";

export const createTheatre = async (req, res) => {
  const newTheatre = new Theatre(req.body);
  try {
    const savedTheatre = await newTheatre.save();
    res.status(200).json(savedTheatre);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateTheatre = async (req, res) => {
  try {
    const updatedTheatre = await Theatre.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTheatre);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteTheatre = async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.params.id);
    res.status(200).json("Theatre has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.params.id);
    res.status(200).json(theatre);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find(req.params.id);
    res.status(200).json(theatres);
  } catch (err) {
    res.status(500).json(err);
  }
};
