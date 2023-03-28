import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { credentials } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(credentials.password, salt);
    const newUser = new User({
      firstname: credentials.firstname,
      lastname: credentials.lastname,
      email: credentials.email,
      phonenumber: credentials.phonenumber,
      password: hash,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(400, "somthing");
  }
};
export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("user not found");
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      res.status(404).send("wrong credentials");
    }
    const { password, isAdmin, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JSON_TOKEN
    );
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "none",
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    res.status(400, "something went wrong");
  }
};
