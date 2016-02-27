
// 'spawn' is better than 'exec' for long processes generating huge data like following example.

var talking = [ "Hi1", "Hi2", "Hi3", "Hi4", "Hi5"];

var interval = setInterval(function() {
	var i = Math.floor(Math.random() * talking.length);
	//console.log(talking[i]);
	process.stdout.write(talking[i] + "\n");
}, 500);

process.stdin.on('data', function(data){
	if (data.toString().trim().toLowerCase() === 'stop'){
		console.log(`STDIN data received -> ${data.toString().trim()}`);
		clearInterval(interval);
		process.exit();
	}
});

