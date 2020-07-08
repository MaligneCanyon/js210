var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);

// the var 'a' dec on line4 is hoisted to the top of the global scope
// since a global var 'a' already exists, the hoist has no effect
// var 'a' is set to the value of 'i' on line4
// line7 logs 4 (the last value of 'i' that is assigned to 'a')

console.log(i); // 5
