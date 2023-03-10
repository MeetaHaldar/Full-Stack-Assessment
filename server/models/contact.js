const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    index: true,
    ref: "users",
  },
});

module.exports = mongoose.model("contacts", contactSchema);
