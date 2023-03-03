const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let data = new User({
      username: name,
      email: email,
      password: hashedPassword,
    });
    try {
      let result = await data.save();
      result = result.toObject();
      delete result.password;
      jwt.sign(
        { result },
        process.env.JWT_KEY,
        { expiresIn: "4h" },
        (err, token) => {
          if (err) {
            res.send({ message: err.message });
          } else res.send({ result, auth: token });
        }
      );
    } catch (err) {
      res.json({ message: err.message });
    }
  } else {
    res.json({ message: "each field is required" });
  }
};
const loginUser = async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      jwt.sign(
        { user },
        process.env.JWT_KEY,
        { expiresIn: "4h" },
        (err, token) => {
          if (err) {
            res.send({ message: err.message });
          } else res.send({ user, auth: token });
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
