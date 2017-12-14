var express = require('express');
var bodyParser = require('body-parser');
var racing = require('./racing');
var ceelo = require('./ceelo');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Server running on port: ' + port);
});

app.post('/racing', racing);
app.post('/ceelo', ceelo);
