var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

// test route
app.get('/racing', express.static(path.join(__dirname, 'racing')) );
app.get('/ceelo', express.static(path.join(__dirname, 'ceelo')) );

// error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
  });

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});