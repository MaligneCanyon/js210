// inputs:
// - str
// outputs:
// - str
// reqs:
// - rtn a new str w/ all consec duplicate chars collapsed into a single char
// rules:
// - none
// struct:
// - str
// algo:
// - init a newStr to ''
// - for each char in the input str
//   - if the current char is not the same as the previous char
//     - add the current char to the newStr
// - rtn the newStr

function crunch(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!i || str[i] !== str[i - 1]) newStr += str[i];
  }

  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
