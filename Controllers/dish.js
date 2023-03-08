import Dish from "../Models/Dishes.js";

export const createDish = async (req, res) => {
  const newDish = new Dish(req.body);
  try {
    const savedDish = await newDish.save();
    res.status(200).json(savedDish);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateDish = async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDish);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteDish = async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.status(200).json("Dish has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find(req.params.id);
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
};
