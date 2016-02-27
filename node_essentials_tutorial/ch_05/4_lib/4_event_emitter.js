var emitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, emitter);

module.exports = Person;
