var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(router);
app.use(express.static(path.join(__dirname, 'public')));


router.all("*", function(req, res, next){
	console.log("Someone made a request to " + req.url);
	next();
});


router.post('/secret', function(req, res){
	var secret = req.body.secret;

	res.end('Password: ' + secret);
});


router.get('/', function(req, res){
	res.render('index');
});


app.listen(3456);
exports = app;
