const Router = require("express").Router();

const user = require("./user");
const test = require('./test');
const validation = require('./validation');
Router.use("/user", user);
Router.use("/test", test);
Router.use("/validation", validation);


module.exports = Router;
