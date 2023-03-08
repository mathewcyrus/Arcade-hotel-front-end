import Ground from "../Models/Ground.js";

export const createGround = async (req, res) => {
  const newGround = new Ground(req.body);
  try {
    const savedGround = await newGround.save();
    res.status(200).json(savedGround);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateGround = async (req, res) => {
  try {
    const updatedGround = await Ground.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGround);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteGround = async (req, res) => {
  try {
    await Ground.findByIdAndDelete(req.params.id);
    res.status(200).json("Ground has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getGround = async (req, res) => {
  try {
    const ground = await Ground.findById(req.params.id);
    res.status(200).json(ground);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllGrounds = async (req, res) => {
  try {
    const grounds = await Ground.find(req.params.id);
    res.status(200).json(grounds);
  } catch (err) {
    res.status(500).json(err);
  }
};
