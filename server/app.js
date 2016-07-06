var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

var PORT = process.env.PORT || 8080;
var ENV = process.env.NODE_ENV || 'development';

server.listen(PORT); // change for production

// server.listen(app.get('port'));
console.log('Node environment:', ENV)
console.log('Server listening on port', PORT);

app.use(express.static(__dirname + '/../client/dist'));

app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'))
});
