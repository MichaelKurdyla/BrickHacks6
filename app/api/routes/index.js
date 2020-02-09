const Router = require("express").Router();

const user = require("./user");
const validate = require("./validation");

Router.use("/user", user);
Router.use("/validate", validate);

module.exports = Router;
