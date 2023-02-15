const express = require("express");
const v1ApiRotes = require("./v1/index");
const router = express.Router();

router.use("/v1", v1ApiRotes);

module.exports = router;
