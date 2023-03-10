const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// JS Docs
/** @type {import("express").RequestHandler} */
const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.json({ message: "each field is required" });
  }

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const user = await newUser.save();
    const userObj = user.toObject();
    delete userObj.password;

    jwt.sign(
      { user: userObj },
      process.env.JWT_KEY,
      { expiresIn: "4h" },
      (err, accessToken) => {
        if (err) {
          res.send({ message: err.message });
        } else res.send({ user: userObj, accessToken });
      }
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};

/** @type {import("express").RequestHandler} */
const loginUser = async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      const userObj = user.toObject();
      delete userObj.password;
      jwt.sign(
        { user: userObj },
        process.env.JWT_KEY,
        { expiresIn: "4h" },
        (err, accessToken) => {
          if (err) {
            res.send({ message: err.message });
          } else res.send({ user: userObj, accessToken });
        }
      );
    } else {
      res.json({ message: "user not found" });
    }
  } else {
    res.json({ message: "user is not present" });
  }
};
module.exports = { registerUser, loginUser };
