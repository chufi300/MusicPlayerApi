const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

router
  .post("/register", validatorRegister, registerCtrl)
  .post("/login", validatorLogin, loginCtrl);

module.exports = router;
