const express = require("express");
const { LoginController } = require("../../controller/index");
const router = express.Router();

const loginController = new LoginController();

router.get("/login", loginController.loginUser);

module.exports = router;
