var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

var PORT = process.env.PORT || 8080;
var ENV = process.env.NODE_ENV || 'development';

server.listen(PORT); // change for production

app.use(express.static(__dirname + '/../client/dist'));