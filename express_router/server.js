var express = require("express");
var app = express();

var router = express.Router();
var port = 3456;

router.get("/", function(req, res){
	res.json({"message": "Hello World"});
});

app.use("/api", router);

app.listen(port, function(){
	console.log("Live at Port " + port);
});
