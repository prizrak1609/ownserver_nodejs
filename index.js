var app = require('express')();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var views = path.join(__dirname, 'views')

// app.use(bodyParser.json()); // for parsing application/json
// 	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// 	app.use('/views', express.static('/views'))

app.get('/', function (req, res) {
	res.sendFile(path.join(views, "index.html"))
});

app.use('/', express.static(views));

app.listen(process.env.PORT || 8080);
