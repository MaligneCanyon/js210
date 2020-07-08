// inputs:
// - str
// outputs:
// - str
// reqs:
// - rtn a new str w/ all uppercase chars in the input str converted to lowercase
// rules:
// - a char is an uppercase alpha char if its numeric rep falls w/i the range 65..90
// struct:
// - String
// algo:
// - init a new str to ''
// - for each char in the str
//   - if the char is an uppercase alpha char
//     - get its numeric rep
//     - add 32 to its numeric rep
//     - convert the result back into a char
//   - add the char to the new str
// - rtn the new str

function toLowerCase(str) {
  let newStr = '';
  let code;
  let char;

  // for (let i = 0; i < str.length; i++) {
  //   code = str.charCodeAt(i);
  //   if (code >= 65 && code <= 90) { // an uppercase alpha char
  //     code += 32;
  //     char = String.fromCharCode(code);
  //   } else {
  //     char = str[i];
  //   }
  //   newStr += char;
  // }

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char >= 'A' && char <= 'Z') { // an uppercase alpha char
      code = str.charCodeAt(i) + 32;
      char = String.fromCharCode(code);
    }
    newStr += char;
  }

  return newStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
