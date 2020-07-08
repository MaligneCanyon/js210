var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// fn setScope() is hoisted
// line4 logs 'outer'
// line5 logs 'outer'
// line6 calls setScope(), passing in 'outer' to param foo, which is a local var w/i setScope()
// so line7 logs 'outer' (var 'a' has not been modified)
// line12 sets globally scoped var 'b' to 'inner'
// so line8 logs 'inner'
