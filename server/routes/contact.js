const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const contactFun = require("../controllers/Contacts");
router.post("/add", verifyToken, contactFun.addContact);

router.delete("/delete", verifyToken, contactFun.deleteContact);

router.put("/update/:id", verifyToken, contactFun.updateContact);

router.get("/getAll", verifyToken, contactFun.getAll);

module.exports = router;
