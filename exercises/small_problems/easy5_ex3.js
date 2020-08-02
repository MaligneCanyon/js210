// inputs:
// - int
// outputs:
// - int
// reqs:
// - take an int
// - reverse the digits of the int and rtn the reversed num
// rules:
// - trailing zeros of the input num will get dropped
// testcases:
// - as below
// struct:
// - str, arr
// algo:
// - convert the num a str
// - split the str into an arr of chars
// - reverse the arr
// - join the arr chars to form a new str
// - convert the new str to a num
// - rtn the num

function reverseNumber(num) {
  // return Number(String(num).split('').reverse().join(''));
  return parseInt(String(num).split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
