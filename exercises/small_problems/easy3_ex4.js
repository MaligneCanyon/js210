// inputs:
// - str
// outputs:
// - boolean
// reqs:
// - take a str as input
// - rtn T or F based on whether or not the str is a palindrome
// rules:
// - case, punctuation, spaces must match in reverse order
// struct:
// - str
// algo:
// - split the str into an arr
// - reverse the arr
// - join the elems of the arr into a newStr
// - rtn true if str == newStr
// - otherwise, rtn false

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
