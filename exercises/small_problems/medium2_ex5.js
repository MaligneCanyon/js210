// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all
// of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not
// (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than
// the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.



// inputs:
// - num
// outputs:
// - num
// reqs:
// - calc the next num (after the input) that is a featured number
// - rtn the num
// rules:
// - a featured num
//   - is an odd num
//   - is a multiple of 7
//   - has all of its digits occur only once
// struct:
// - numeric
// algo:
// - init a const to the max featured num
// - if the input num is < the max featured num
//   - for a counter from the input num up to the max featured num
//     - if the counter is odd
//       - if the counter is a multiple of 7
//         - if the counter has unique digits
//           - rtn the counter
// - rtn an err msg

function featured(num) {
  const MAX_FEATURED_NUM = 9876543201;
  var i;

  if (num < MAX_FEATURED_NUM) {
    i = num - num % 7; // calc the first multiple of 7 that is <= the current num
    i += (i % 2) ? 14 : 7; // calc the next odd num that is a multiple of 7
    // console.log(`i === ${i}`);
    for (; i <= MAX_FEATURED_NUM; i += 14) { // only chk odd nums that are multiples of 7
      if (hasUniqueDigits(i)) return i;
    }
  }

  console.log('no featured number found');
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543202));   // undefined

// determine whether the digits in a num are unique
function hasUniqueDigits(num) {
  for (let i = 0; i < 10; i++) {
    pattern = new RegExp(String(i), 'g');
    arr = String(num).match(pattern);
    // console.log(arr);
    if ((arr || []).length > 1) { // duplicate digits
      return false;
    }
  }

  return true;
}

console.log(hasUniqueDigits(12));         // true
console.log(hasUniqueDigits(1234));       // true
console.log(hasUniqueDigits(1231));       // false
console.log(hasUniqueDigits(1234567890)); // true
console.log(hasUniqueDigits(1234567891)); // false
