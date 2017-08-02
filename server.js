var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static('public'));
app.use("/static", express.static(path.join(__dirname, 'node_modules')));
app.use("/static", express.static(path.join(__dirname, 'public/assets')));


app.listen(3000, function () {
    console.log("hola puerto 3000");
}); 