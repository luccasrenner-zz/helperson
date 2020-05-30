let express = require("express");
let App = express.Router();

let newAccount = require("./newAccount/newAccount");
let login = require("./login/login");

App.post("/newAcount", newAccount);
App.post("/login", login);

module.exports = App;
