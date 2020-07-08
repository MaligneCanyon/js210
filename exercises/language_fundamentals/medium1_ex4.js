function getSelectedColumns(numbers, cols) {
  var result = [];

  // for (var i = 0, length = numbers.length; i < length; i += 1) {
  //   for (var j = 0, length = cols.length; j < length; j += 1) { // re-assigns value of 'length' var

  // for (let i = 0, length = numbers.length; i < length; i += 1) {
  //   for (let j = 0, length = cols.length; j < length; j += 1) { // use 'let' instead of 'var', or ...

  for (var i = 0, lengthI = numbers.length; i < lengthI; i += 1) {
    for (var j = 0, lengthJ = cols.length; j < lengthJ; j += 1) { // ... use unique 'length_' vars to fix
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// The initialation of the inner 'for' loop re-assigns a value to the outer-scoped 'length' var;
// this results in the incorrect value of 'length' being used in the outer 'for' loop.

// From the solution,
// 'This behavior is caused by the fact that "blocks" do not create a new scope in JavaScript. Even though
// there is a second variable declaration for length, a new variable is not created. After hoisting, the
// two declarations become one and the same, effectively making the second a reassignment.
