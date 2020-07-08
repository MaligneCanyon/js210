// inputs:
// - string
// outputs:
// - boolean
// reqs:
// - take a str as input
// - rtn T or F based on whether or not the str is a palindrome
// rules:
// - case, punctuation, spaces do not matter
// - ignore all non-alphanumeric chars
// struct:
// - string
// algo:
// - convert the str to uppercase
// - delete all non-alphanumeric chars from the str
// - for the remaining chars,
//   - rtn true if str is a palindrome
//   - otherwise, rtn false

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// function isRealPalindrome(str) {
//   let newStr = str.toUpperCase();
//   newStr = newStr.replace(/[^A-Z0-9]/gi, '');
//   // console.log(newStr);
//   return isPalindrome(newStr);
// }

function isRealPalindrome(str) {
  return isPalindrome(str.toUpperCase().replace(/[^A-Z0-9]/gi, ''));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
