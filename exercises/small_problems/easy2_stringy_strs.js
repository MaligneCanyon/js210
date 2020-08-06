// algo:
// - init a str to ''
// - ndx times
//   - if ndx is odd
//     - append a '0' to the str
//   - else
//     - append a '1' to the str
// - rtn the str

function stringy(num) {
  let str = '';

  for (let ndx = 0; ndx < num; ndx++) {
    str += ndx % 2 ? '0' : '1';
  }

  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
