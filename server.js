var express = require('express');
var path = require('path');
var url = require('url');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, './public/search.html'));
});

app.get('/response',function(req, res){
    res.send("Your response was:");
    res.send(req.body.brand);
});

app.listen(8080);
console.log("Server Started!");