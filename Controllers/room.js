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
  if (start_date === end_date) {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } else {
    try {
      const filter = { isAvailable: true };
      if (start_date && end_date) {
        filter.start_date = { $gte: start_date };
        filter.end_date = { $lte: end_date };
      }
      const rooms = await Room.find(filter).exec();
      res.status(200).json(rooms);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

export const reserveRoom = async (req, res) => {
  const { id, dates, options, userid } = req.body;
  const adults = options.adults;
  const children = options.children;
  const bedroom = options.bedrooms;
  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    for (const date of dates) {
      const startDate = date.startDate;
      const endDate = date.endDate;
      const overlappingBookings = room.bookedDates.filter((booking) => {
        return (
          (startDate >= booking.startDate && startDate <= booking.endDate) ||
          (endDate >= booking.startDate && endDate <= booking.endDate)
        );
      });
      if (overlappingBookings.length > 0) {
        return res.status(400).json({
          message: "Room is not available for the given dates",
        });
      }
    }
    room.bookedDates = [...room.bookedDates, ...dates];
    room.bookingoptions.push({
      bedroom: bedroom,
      adults: adults,
      children: children,
    });
    room.customerID = userid;
    room.isAvailable = false;
    const reservedRoom = await room.save();
    return res
      .status(200)
      .json({ message: "Room reserved successfully", reservedRoom });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getAllReservedRooms = async (req, res) => {
  try {
    const reservedRooms = await Room.find({ isAvailable: false });
    res.status(200).json(reservedRooms);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
