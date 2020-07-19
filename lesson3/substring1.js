// inputs:
// - str, int (start ndx), int (length in chars)
// outputs:
// - str
// reqs:
// - rtn a substr of the input str, starting at the 'start' ndx and running for (up to) 'length' chars
// rules:
// - if start < 0
//   - start = start + str.length
// struct:
// - String
// algo:
// - init a newStr to ''
// - if 'length' > 0
//   - if start < 0
//     - start += str.length
//   - for 'length' chars, starting at the 'start' ndx
//     - if the str char is undefined (we have passed the eos or 'start' was ill-defined)
//       - break
//     - append the str char to the newStr
// - rtn the newStr

function substr(str, startNdx, length) {
  let newStr = '';

  if (length > 0) {
    if (startNdx < 0) startNdx += str.length;
    for (let i = 0; i < length; i++) {
      if (str[startNdx + i] === undefined) break;
      newStr += str[startNdx + i];
    }
  }

  return newStr + '!'; // add ! to indicate eos
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

console.log(substr(string, -20, 2));    // ""
