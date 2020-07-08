var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// line7 invokes fn myValue, passing in a reference to arr 'a'
// on line3, param 'b' is assigned a ref to the arr obj pointed to by 'a'
// line4 incrs the elem at ndx 2 in the arr obj pointed to by 'b', mutating 'a'
// line8 logs the mutated arr 'a', namely [1, 2, 10]


// after hoisting ...
function myValue(b) {
  b[2] += 7; // mutating
}
var a;
a = [1, 2, 3];
myValue(a); // 'a' is passed by reference
console.log(a); // logs: [1, 2, 10]
