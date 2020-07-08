var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

// line3 logs 'outer'
// the dec for var setScope gets hoisted, but not the assignment of the anonymous fn to it
// so calling setScope() as a function on line4 raises a TypeError (setScope is an undefined var)
// so line5 never execs
