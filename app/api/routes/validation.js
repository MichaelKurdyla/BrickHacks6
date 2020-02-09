const express = require("express");
const Router = express.Router();
const validateQR = require("../validation/validateQR");

Router.post("/qr", validateQR.validate);
Router.post("/return", validateQR.return);
Router.post("/purchase", validateQR.purchase);



module.exports = Router;
