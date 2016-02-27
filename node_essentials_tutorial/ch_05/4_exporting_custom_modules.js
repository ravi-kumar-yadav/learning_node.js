var Person = require('./4_lib/4_event_emitter');

var ramesh = new Person('Ramesh');

ramesh.on('speak', function(speech){
	console.log(`${this.name} said ${speech}`);
});

ramesh.emit('speak', 'Ram Ram bhaiyo...');

var suresh = new Person('Suresh');

suresh.on('speak', function(speech){
	console.log(`${this.name} --> ${speech}`);	
});

suresh.emit('speak', 'Radhey Radhey');
