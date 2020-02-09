const express = require("express");
const Router = express.Router();
const validateQR = require("../validation/validateQR");

Router.post("/test", validateQR.validate);

module.exports = Router;