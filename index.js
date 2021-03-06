var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var views = path.join(__dirname, 'views')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('views'))

app.get('/', function (req, res) {
	res.sendFile(path.join(views, "index.html"))
});

app.listen(process.env.PORT || 8080);
