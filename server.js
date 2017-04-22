var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/'));

var PORT = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(PORT, function() {
  console.log('Server Running on ' + PORT);
});