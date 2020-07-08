// function trim(str) {
//   let newStr = '';
//   let leadingBlank = true;

//   // strip leading blanks
//   for (let i = 0; i < str.length; i++) {
//     if (leadingBlank && str[i] !== ' ') leadingBlank = false;
//     if (!leadingBlank) newStr += str[i];
//   }

//   // strip trailing blanks
//   str = newStr;
//   newStr = '';
//   let j = str.length - 1;

//   // find the ndx of the last non-blank char
//   for (; j >= 0; j--) {
//     if (str[j] !== ' ') break;
//   }

//   // copy chars up to and including the last non-blank char
//   for (let k = 0; k <= j; k++) {
//     newStr += str[k];
//   }

//   return newStr + '!'; // append an '!' to chk for trailing blanks
// }

function trimLeading(str) {
  let newStr = '';
  let leadingBlank = true;

  // strip leading blanks
  for (let i = 0; i < str.length; i++) {
    if (leadingBlank && str[i] !== ' ') leadingBlank = false;
    if (!leadingBlank) newStr += str[i];
  }

  return newStr;
}

function trimTrailing(str) {
  let newStr = '';
  let j = str.length - 1;

  // find the ndx of the last non-blank char
  for (; j >= 0; j--) {
    if (str[j] !== ' ') break;
  }

  // copy chars up to and including the last non-blank char
  for (let k = 0; k <= j; k++) {
    newStr += str[k];
  }

  return newStr + '!'; // append an '!' to chk for trailing blanks
}

function trim(str) {
  return trimTrailing(trimLeading(str));
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
