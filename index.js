const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile('static/view/index/index.html', { root: __dirname });
})

app.get('/dashboard', function(req, res) {
    res.sendFile('static/view/dashboard/index.html', { root: __dirname });
})

app.listen(3333);
