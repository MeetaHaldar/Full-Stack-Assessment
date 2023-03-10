const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const contactFun = require("../controllers/Contacts");

const router = express.Router();

router.use(verifyToken);

router.post("/", contactFun.addContact);

router.delete("/:id", contactFun.deleteContact);

router.put("/:id", contactFun.updateContact);

router.get("/", contactFun.getAll);

module.exports = router;
