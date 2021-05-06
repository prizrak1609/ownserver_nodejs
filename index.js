var app = require('express')();
var bodyParser = require('body-parser');
var requestIp = require('request-ip');
var fs = require('fs');
var net = require('net');

var settings = {}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(requestIp.mw())

function getIP() {
    var ip = settings["raspberry"]
    if (net.isIPv6(ip))
       ip = "[" + ip + "]"
    return "http://" + ip + ":8080"
}

app.get('/', function (req, res) {
  //res.send("name " + req.query.name + " address " + req.connection.remoteAddress)
  res.redirect(getIP())
});

app.get('/register', function (req, res) {
    var name = req.query.name
    var ip = req.clientIp
    settings[name] = ip
    res.send("registered " + name + " " + ip)
});

app.use(function (req, res, next) {
    res.status(404).redirect(getIP())
})

app.listen(process.env.PORT || 8080);
