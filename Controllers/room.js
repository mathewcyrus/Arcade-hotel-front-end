import Reservation from "../Models/Reservation.js";
import Room from "../Models/Room.js";

export const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteAllRooms = async (req, res) => {
  try {
    const deletedRooms = await Room.deleteMany({});
    res.status(200).json(deletedRooms);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
export const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllRooms = async (req, res) => {
  const { start_date, end_date } = req.query;
  try {
    // If start_date and end_date are not provided, return all rooms
    if (!start_date && !end_date) {
      const rooms = await Room.find().lean();
      return res.status(200).json(rooms);
    } else {
      // Find all reservations within the date range
      const reservationsRoomsInDateRange = await Reservation.find({
        ReservationsDates: {
          $elemMatch: {
            startDate: { $lte: end_date },
            endDate: { $gt: start_date, $lte: end_date },
          },
        },
      }).select("ReservedRoom.roomID");
      // Get an array of room IDs that are reserved during the date range
      const reservedRoomIDs = reservationsRoomsInDateRange.map(
        (reservation) => reservation.ReservedRoom.roomID
      );
      // Find all rooms that are not reserved within the date range
      const availableRooms = await Room.find({
        _id: { $nin: reservedRoomIDs },
      }).lean();

      return res.status(200).json(availableRooms);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};
