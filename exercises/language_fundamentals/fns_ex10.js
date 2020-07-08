logValue();

function logValue() {
  console.log('Hello, world!');
}

// the fn dec on lines 3-5 is hoisted
// line1 invokes fn logValue
// so line4 logs 'Hello, world!'


// after hoisting ...
function logValue() {
  console.log('Hello, world!');
}
logValue(); // logs: Hello, world!


// Further Exploration
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);


// after hoisting ...
function logValue() {
  console.log('Hello, world!');
}
// var logValue; // duplicate declaration, ignored
logValue = 'foo'; // illustrates dynamic typing
console.log(typeof logValue); // logs: string
