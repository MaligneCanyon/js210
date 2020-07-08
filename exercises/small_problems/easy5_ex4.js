// inputs:
// - str
// outputs:
// - str
// reqs:
// - rtn the center char (odd length str) or chars (even length str) of a str
// rules:
// - none
// struct:
// - String
// algo:
// - calc the "center" ndx of the str
// - if the str is odd length
//   - rtn the center char
// - else
//   - rtn the two center chars

function centerOf(str) {
  let ndx = Math.floor(str.length / 2);

  return (str.length % 2) ? str.slice(ndx, ndx + 1) : str.slice(ndx - 1, ndx + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
