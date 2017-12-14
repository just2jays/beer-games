var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

// routes to serve the static HTML files
app.get('/racing', function(req, res) {
    res.sendfile('racing/index.html');
});
// Note: route names need not match the file name
app.get('/ceelo', function(req, res) {
    res.sendfile('ceelo/index.html');
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});