//***********************************************************************************************
// snippet 1
//***********************************************************************************************
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));
function counter(count) {
  // ...
}

// after hoisting becomes
function counter(count) {
  // ...
}
var rate;
counter = 5;
rate = 3;
console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15


//***********************************************************************************************
// snippet 2
//***********************************************************************************************
function counter(count) {
  // ...
}
console.log('The total value is ' + String(counter * rate));
var counter = 5;
var rate = 3;

// after hoisting becomes
function counter(count) {
  // ...
}
var rate;
console.log('The total value is ' + String(counter * rate));
// logs: The total value is NaN
counter = 5;
rate = 3;
// 'var counter' is hoisted (but not its init) (and is then ignored as a duplicate);
// String(counter * rate))' refs the fn def'n, so 'counter * rate' evals to NaN;
// the snippet logs 'NaN'


//***********************************************************************************************
// snippet 3
//***********************************************************************************************
var counter = 5;
var rate = 3;
function counter(count) {
  // ...
}
console.log('The total value is ' + String(counter * rate));

// after hoisting becomes
function counter(count) {
  // ...
}
var rate;
counter = 5;
rate = 3;
console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15
