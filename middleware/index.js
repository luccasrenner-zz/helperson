let express = require('express');
let App = express.Router();

let newAccount = require('./newAccount/newAccount');


App.post('/newAcount', newAccount )


module.exports =  App;
