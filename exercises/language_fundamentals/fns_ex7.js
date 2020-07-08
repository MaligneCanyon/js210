var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// line7 invokes fn myValue with the argument 7
// the argument value is copied to the param 'a' w/i myValue
// however, param 'a' w/i myValue is scoped locally and has no effect on globally scoped 'a'
// so line8 logs the value of globally scoped 'a', namely 7


// after hoisting ...
function myValue(a) {
  a += 10;
}
var a;
a = 7;
myValue(a);
console.log(a); // logs: 7
