// pp3
function nthElementOf(arr, index) {
  console.log(arr[index]);
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16 // ... fn name should be 'elementAtIndex'
nthElementOf(digits, 8);   // what does this return? // undefined
nthElementOf(digits, -1);  // what does this return? // undefined


// pp4
arr = [1, 2, 3, 4];
arr[-2] = 7; // adds a pseudo elem to the eoa
console.log(arr); // [1, 2, 3, 4, '-2': 7]
console.log(arr.length); // 4 // pseudo elems don't affect arr length

digits[-1] = -42;
nthElementOf(digits, -1); // -42
console.log(digits[-1]); // -42
console.log(digits['-1']); // -42 // Note that we are using a string here
