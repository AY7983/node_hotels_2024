const notes = require('./notes.js');
var _ = require('lodash');     // "_ it is recommended to require lodash into _"

console.log('server file is available');
var age = notes.age;
console.log(age);
var result = notes.addNumber(age,18);
console.log(result);

var data = ["person","person",1,2,1,2,'name','age','2'];      //unique nikalo easy by lodash
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString('asdf'));
