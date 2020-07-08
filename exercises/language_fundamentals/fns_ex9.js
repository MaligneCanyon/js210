console.log(a);

var a = 1;

// the var 'a' dec on line3 is hoisted, but not the init
// so line1 logs undefined


// after hoisting ...
var a;
console.log(a); // logs: undefined
a = 1;
