var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port, function(){
    console.log("Server started ..!");
});

app.get('/', function (req, res) {
    res.send('root')
})