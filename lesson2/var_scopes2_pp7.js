var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

// 'total' is scoped globally
// line8 logs 50 (the original value of 'total')
// w/i fn incrementBy, 'increment' is scoped locally
// line9 causes 'total' to be set to 60 (50 plus the arg value of 10)
// so line10 logs 60
// line11 logs 15 (the globally scoped 'increment' value)
