var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// line8 logs the value of the globally scoped 'myVar', namely 'This is global'


// after hoisting
function someFunction() {
  var myVar = 'This is local';
}
var myVar;
myVar = 'This is global';
someFunction();
console.log(myVar); // logs: This is global
