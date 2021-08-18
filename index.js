var app = require('express')();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var settings = {}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
	res.render("index")
});
app.listen(process.env.PORT || 8080);
