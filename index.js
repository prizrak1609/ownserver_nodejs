var app = require('express')();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var settings = {}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('views'))

app.get('/', function (req, res) {
	res.sendFile("views/index.html")
});
app.listen(process.env.PORT || 8080);
