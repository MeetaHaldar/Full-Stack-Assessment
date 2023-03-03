const express = require("express");
const router = express.Router();

const authFun = require("../controllers/auth");
router.post("/register", authFun.registerUser);

router.post("/login", authFun.loginUser);

module.exports = router;
