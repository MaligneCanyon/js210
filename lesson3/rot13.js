// inputs:
// - String
// outputs:
// - String
// reqs:
// - rtn a newStr with alphabetic chars rotated by 13 char positions
// rules:
//   "If you reach the end of the alphabet, return to the beginning"
// struct:
// - String
// algo:
// - init a newStr to ''
// - for each char in the input str
//   - if the char is an uppercase letter
//     - convert the char to a lowercase letter
//   - if the char is a letter
//     - calc the ndx of the char in the alphabet
//       - add 13 to ndx
//       - divide the result by 26 and save the remainder as the new ndx
//     - determine the new char represented by the new ndx
//     - if the original char was an uppercase letter
//       - convert the char back to an uppercase letter
//   - add the char to the newStr
// - rtn the newStr

function isUpperCaseLetter(char) {
  return (char >= 'A' && char <= 'Z');
}

function rot13(str) {
  let char;
  let isUpperCase;
  let ndx;
  let newStr = '';
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const OFFSET = 13;

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    isUpperCase = isUpperCaseLetter(char); // an uppercase letter
    if (isUpperCase) char = char.toLowerCase(); // convert the char to lowercase
    ndx = ALPHABET.indexOf(char);
    if (ndx > -1) { // a letter in the alphabet
      ndx = (ndx + OFFSET) % 26;
      char = ALPHABET[ndx];
      if (isUpperCase) char = char.toUpperCase(); // convert the char back to uppercase
    }

    newStr += char;
  }

  return newStr;
}

console.log(rot13('abcDEF'));
console.log(rot13(rot13('abcDEF')));

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
str = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'
console.log(rot13('Teachers open the door, but you must enter by yourself.') === str);

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs: Teachers open the door, but you must enter by yourself.
