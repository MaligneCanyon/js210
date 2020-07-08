var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// line5 logs the functionally scoped value of 'myVar', namely 'This is local'


// after hoisting ...
function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}
var myVar;
myVar = 'This is global';
someFunction(); // logs: This is local
