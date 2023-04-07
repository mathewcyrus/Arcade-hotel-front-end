import Enquiry from "../Models/Enquiry.js";

export const createEnquiry = async (req, res) => {
  const newenquiry = new Enquiry(req.body);
  try {
    const savedEnquiry = await newenquiry.save();
    res.status(200).json(savedEnquiry);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateEnquiry = async (req, res) => {
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEnquiry);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.status(200).json("Enquiry has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getEnquiry = async (req, res) => {
  try {
    const Enquiry = await Enquiry.findById(req.params.id);
    res.status(200).json(Enquiry);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const Enquiryes = await Enquiry.find(req.params.id);
    res.status(200).json(Enquiryes);
  } catch (err) {
    res.status(500).json(err);
  }
};
