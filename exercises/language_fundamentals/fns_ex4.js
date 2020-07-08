var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// JS looks for myVar in the local scope of someFunction, can't find it there, but finds it in the global
// scope
// myVar is scoped globally
// myVar is accessible w/i someFunction
// so line4 logs 'This is global'


// after hoisting ...
function someFunction() {
  console.log(myVar);
}
var myVar;
myVar = 'This is global';
someFunction(); // logs: This is global
