var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'myVar' is scoped globally on line1
// line7 calls someFunction()
// line4 sets the global myVar to 'This is local'
// line8 logs the value of the globally scoped 'myVar', namely 'This is local'


// after hoisting ...
function someFunction() {
  myVar = 'This is local';
}
var myVar;
myVar = 'This is global';
someFunction();
console.log(myVar); // logs: This is local
