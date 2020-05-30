let express = require('express');
let App = express.Router();

let newAccount = require('./newAccount/newAccount');


App.post('/newAcount', newAccount )
App.post('/login', (req, res) => {
    res.json({
            "session_id": "2c5698408ddb5846f0c3098826eaf51e",
            "expiration": 1590739653
    });
} )


module.exports =  App;
