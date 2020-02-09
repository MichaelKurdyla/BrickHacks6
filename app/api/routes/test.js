const express = require("express");
const Router = express.Router();
const textController = require("../services/sms");

Router.get('/text', textController.SignUpText);

module.exports = Router;