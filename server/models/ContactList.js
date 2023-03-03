const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNum: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    index: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Contacts", contactSchema);
