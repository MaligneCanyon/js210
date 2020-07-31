// inputs:
// - str (of words)
// outputs:
// - str (w/ 1st and last char of each word swapped)
// reqs:
// - swap the 1st and last char of each word in a str; rtn the new str
// rules:
// - each str contains >= 1 char
// - each word contains >= 1 word
// - words and spaces only; no extra spaces
// struct
// - str
// algo:
// - if the input str length is < 2, rtn the input str
// - otherwise, rtn a new str composed of
//   - the last letter of the input str, plus
//   - the 2nd thru 2nd last letter of the input str, plus
//   - the first letter of the input str

function rearrange(str) {
  return str.length < 2 ? str : str[str.length - 1] + str.slice(1, -1) + str[0];
}

function swap(str) {
  return str.split(' ').map(rearrange).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
