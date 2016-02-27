"use strict"

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
	name: '',
	sayings: []
};

rl.question('What is the name of real person? ', function(ans){
	person.name = ans;
	//console.log(`What would ${person.name} would say ?`);
	rl.setPrompt(`What would ${person.name} would say ?  `);
	rl.prompt();
});

rl.on('line', function(ans){	
	if (ans.toLowerCase() === "exit"){
		rl.close();
	} else {
		person.sayings.push(ans);
		rl.setPrompt(`What else would ${person.name} say... `);
		rl.prompt();
	}
});

rl.on('close', function(){
	console.log("%s said these sayings %j", person.name, person.sayings);
});

