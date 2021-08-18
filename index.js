var app = require('express')();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var settings = {}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.engine('html', function(path, options, fn){
  fs.readFile(path, 'utf8', function(err, str){
    if (err) return fn(err);
    fn(null, str);
  });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
	res.sendFile('index.html', {
        root: path.join(__dirname, 'views')
    })
});
app.listen(process.env.PORT || 8080);
