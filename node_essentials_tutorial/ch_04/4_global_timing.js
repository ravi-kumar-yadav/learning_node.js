global.console.log("Hi there");

var timeout = 3000;
var timeInterval = 10;
var timeElapsed = 0;

function showPercentage(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting for ${p}%...`);
}

var interval = setInterval(function(){
	timeElapsed += timeInterval;
	showPercentage(Math.floor((timeElapsed/timeout) * 100));
}, timeInterval);

setTimeout(function() {
	showPercentage(100);
	console.log("\n\nIts done");
	clearInterval(interval);
}, timeout);

showPercentage(0);
