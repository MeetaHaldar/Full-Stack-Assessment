const express = require("express");
const authFun = require("../controllers/auth");

const router = express.Router();

router.post("/register", authFun.registerUser);
router.post("/login", authFun.loginUser);

module.exports = router;
