var app = require('express')();
var bodyParser = require('body-parser');
var net = require('net');

var settings = {}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function getIP(name) {
    var ip = settings[name]
    if (net.isIPv6(ip))
       ip = "[" + ip + "]"
    return "http://" + ip + ":8080"
}

app.get('/', function (req, res) {
  //res.send("name " + req.query.name + " address " + req.connection.remoteAddress)
    var name = req.query.name
    if (!name) {
        name = "raspberry"
    }
    res.redirect(getIP(req.query.name))
});

app.get('/register', function (req, res) {
    var name = req.query.name
    var ip = req.query.ip
    settings[name] = ip
    res.send("registered " + name + " " + ip)
});

app.use(function (req, res, next) {
    res.status(404).redirect(getIP("raspberry"))
})

app.listen(process.env.PORT || 8080);
