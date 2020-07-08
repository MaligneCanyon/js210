// see medium2_ex2.js for (sim) pedac methodology

function triangle(...arr) { // use the rest param
  arr.sort((a, b) => { return a - b; });
  if (arr.reduce((accum, elem) => accum + elem, 0) !== 180 || arr[0] <= 0) return 'invalid';
  if (arr[2] > 90) return 'obtuse';
  if (arr[2] === 90) return 'right';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
