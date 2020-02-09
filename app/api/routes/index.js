const Router = require("express").Router();

const user = require("./user");
const test = require('./test');
Router.use("/user", user);
Router.use("/test", test);


module.exports = Router;
