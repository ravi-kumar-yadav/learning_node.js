// main executing method for 'spawn'

var spawn = require('child_process').spawn;

// arg1->main process, arg2->array of other command line arguments
var cp = spawn("node", ["6_child_process_helper"]);


// when linked process (like '6_child_process_helper' outputs anything on 'cp' object, then do following...)
cp.stdout.on('data', function(data){
	console.log(`STDOUT: ${data.toString()}`);	
});


// when internal process closes then ...
cp.on('close', function(data){
	console.log("Child process is closing");
	process.exit();
});

//			 ||=>	stdout	<== child_process
//	console <==> cp	 ==
//			 ||=>	stdin   ==> child_process

// how to internal child process ???
// as internal process closes when we write 'stop' on its stdin,
// so write 'stdin' on child-process' internal stdin
setTimeout(function(){
	cp.stdin.write('stop');
}, 4000);
