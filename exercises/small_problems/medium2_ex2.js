// inputs:
// - 3 nums
// outputs:
// - str
// reqs:
// - determine the type of triangle based on three input side lengths
// - rtn a str indicating the type
// rules:
// - Equilateral: All three sides are of equal length.
//   Isosceles: Two sides are of equal length, while the third is different.
//   Scalene: All three sides are of different lengths.
// - To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length
//   of the longest side, and every side must have a length greater than 0. If either of these conditions is not
//   satisfied, the triangle is invalid.
// struct:
// - arr
// algo:
// - place the input lengths in an arr
// - sort the arr numerically
// - apply the rules to determine the type of triangle
// - rtn the triangle type

// function triangle(s1, s2, s3) {
//   var arr = [s1, s2, s3].sort((a, b) => { return a - b; });
function triangle(...arr) { // use the rest param
  arr.sort((a, b) => { return a - b; });
  // console.log(arr);
  if (arr[0] <= 0 || arr[0] + arr[1] <= arr[2]) return 'invalid';
  if (arr[0] === arr[2]) return 'equilateral';
  if (arr[0] === arr[1] || arr[1] === arr[2]) return 'isosceles';
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

console.log(triangle(3, 4, 4));        // "isosceles"
console.log(triangle(3, 3, -4));       // "invalid"
