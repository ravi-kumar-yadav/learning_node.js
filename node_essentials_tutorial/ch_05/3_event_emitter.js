var emitter = require('events').EventEmitter;
var util = require('util');

// var emitter = new events.EventEmitter();
//
// emitter.on('customEvent', function(message, status){
//   console.log(`${status}: ${message}`);
// });
//
// emitter.emit('customEvent', 'Works Great', 200);
var Person = function(name){
  this.name = name;
};

util.inherits(Person, emitter);

var person = new Person('Ram');
person.on('speak', function(speech){
  console.log(`${this.name}: ${speech}`);
});

person.emit('speak', 'Kauwa moti khayega');
