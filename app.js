var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser({extended: false}));//.urlencoded({extended: true})

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Request to our API incoming...');
    next(); // Move to next route, use this middleware to validate request, log data, save analytics, statistics, etc.
});

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ msg: 'Welcome to our API!' });   
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});