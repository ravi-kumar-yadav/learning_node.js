var express = require("express");
var app = express();

var router = express.Router();
var port = 3456;


// adding middleware to print type of request (GET, POST, etc...)
// being 'middleware', this will be executed for each request
// next() allows us process the request further
router.use(function(req, res, next){
	console.log("/" + req.method);
	next();
});


router.get("/", function(req, res){
	res.json({"message": "Hello World"});
});


// "/api" is attached to each incoming request
app.use("/api", router);


app.listen(port, function(){
	console.log("Live at Port " + port);
});
