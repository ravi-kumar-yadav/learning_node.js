var exec = require('child_process').exec;
var util = require('util');

exec('ls', function(err, stdout){
	if (err){
		util.log(err);
	}

	util.log("Displaying values:");
	util.log(stdout);
});
