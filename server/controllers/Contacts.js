const Contact = require("../models/contact");

/** @type {import("express").RequestHandler} */
const addContact = async (req, res) => {
  const userId = req.user._id;

  const { name, email, phone } = req.body;

  let data = new Contact({
    name,
    email,
    phone,
    userId,
  });

  try {
    let result = await data.save();
    res.send(result);
  } catch (err) {
    res.json({ message: err.message });
  }
};

/** @type {import("express").RequestHandler} */
const deleteContact = async (req, res) => {
  const userId = req.user._id;
  const contactId = req.params.id;
  const result = await Contact.findOneAndDelete({ _id: contactId, userId });
  res.send(result);
};

/** @type {import("express").RequestHandler} */
const updateContact = async (req, res) => {
  const contactId = req.params.id;
  const userId = req.user._id;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, userId },
    req.body,
    {
      new: true,
    }
  );
  res.send(result);
};

/** @type {import("express").RequestHandler} */
const getAll = async (req, res) => {
  const userId = req.user._id;
  const result = await Contact.find({ userId });
  res.send(result);
};

module.exports = {
  addContact,
  deleteContact,
  updateContact,
  getAll,
};
