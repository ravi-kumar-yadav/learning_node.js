var express = require("express");
var app = express();

var router = express.Router();
var port = 3456;


// Executed first
// adding middleware to print type of request (GET, POST, etc...)
// being 'middleware', this will be executed for each request
// next() allows us process the request further
// 'middleware' can be used for logging, authentication, etc...
router.use(function(req, res, next){
	console.log("/" + req.method);
	next();
});


// Executed second
// accessing 'parameter' in 'middleware'
// assuming the param name id 'id'
router.use("/user/:id", function(req, res, next){
	if (req.param.id == 0){
		res.json({"message": "You must pass ID other than 0");
	} else {
		next();
	}
});


router.get("/", function(req, res){
	res.json({"message": "Hello World"});
});


// accessing 'id' in normal router
router.get("/user/:id", function(req, res, next){
	res.json({"message": "Hello " + req.param.id});
});


// "/api" is attached to each incoming request
app.use("/api", router);


app.listen(port, function(){
	console.log("Live at Port " + port);
});
