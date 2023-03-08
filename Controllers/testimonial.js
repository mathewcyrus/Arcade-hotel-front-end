import Testimonial from "../Models/Testimonial.js";

export const createTestimonial = async (req, res) => {
  const newTestimonial = new Testimonial(req.body);
  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(200).json(savedTestimonial);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdateTestimonial = async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTestimonial);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json("Testimonial has beem deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    res.status(200).json(testimonial);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllTestimonialsForAdmin = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().all();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().limit(3);
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json(err);
  }
};
