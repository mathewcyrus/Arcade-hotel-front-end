import Reservation from "../Models/Reservation.js";

export const createReservation = async (req, res) => {
  const newReservation = new Reservation(req.body);
  try {
    const savedReservation = await newReservation.save();
    res
      .status(200)
      .json({ message: "Reservation successful", savedReservation });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const UpdateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Reservation has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getAllReservationsForCustomer = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
