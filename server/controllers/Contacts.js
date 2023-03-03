const Contact = require("../models/ContactList");
const addContact = async (req, res) => {
  const { name, email, phoneNum, userId } = req.body;

  let data = new Contact({
    name: name,
    email: email,
    phoneNum: phoneNum,
    userId: userId,
  });

  try {
    let result = await data.save();
    res.send(result);
  } catch (err) {
    res.json({ message: err.message });
  }
};
const deleteContact = async (req, res) => {
  const { contactId } = req.body;
  let result = await Contact.findOneAndDelete({ _id: contactId });
  res.send(result);
};
const updateContact = async (req, res) => {
  let result = await Contact.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
};
const getAll = async (req, res) => {
  const id = req.body.userId;
  let result = await Contact.find({ userId: id });
  res.send(result);
};

module.exports = {
  addContact,
  deleteContact,
  updateContact,
  getAll,
};
