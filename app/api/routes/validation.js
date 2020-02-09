const express = require("express");
const Router = express.Router();
const validateQR = require("../validation/validateQR");

Router.post("/qr", validateQR.validate);

module.exports = Router;
