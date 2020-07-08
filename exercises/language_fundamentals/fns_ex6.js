var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// line7 invokes fn myValue with the argument 7
// the argument value is copied to the param 'b' w/i myValue
// however, param 'b' w/i myValue is scoped locally and has no effect on globally scoped 'a'
// so line8 logs the value of globally scoped 'a', namely 7


// after hoisting ...
function myValue(b) {
  b += 10;
}
var a;
a = 7;
myValue(a);
console.log(a); // logs: 7
