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


// Reading 'parameters' from 'get' request itself
router.get('/secret/:key', function(req, res){
	var key = req.params.key;
	res.end('Password: ' + key);
});


/*
	Nested key format
	http://..../value/otherValue

	req.params = 	{
				key: 'value',
				otherKey: 'otherValue'
			}
*/

// Reading multiple nested keys
router.get('/secret/:key/:otherKey', function(req, res){
	var key = req.params.key;
	var otherKey = req.params.otherKey;

	res.end('Value: ' + key + ', otherValue: ' + otherKey);
});





// Query i.e. means key-value pairs in query itself
// e.g. http://.../secret?pass=Password...
router.get('/secret*', function(req, res){
	var password = req.query.pass;
	res.end('New Password: ' + password);
});


app.listen(3456);
exports = app;
