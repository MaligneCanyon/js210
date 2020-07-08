function lastNOf(arr, count) {
  return arr.slice(-count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(digits); // non-mutating
