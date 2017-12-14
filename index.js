var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(){
    console.log("Server started ..!");
});
