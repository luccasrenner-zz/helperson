const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('1');
})

app.get('/login', function(req, res) {
    res.send('login');
})

app.listen(3333);
