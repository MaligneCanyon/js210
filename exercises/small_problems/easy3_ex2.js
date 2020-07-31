// rtn a num as a str w/ a suffix; ex. 23 // '23rd'
function suffix(num) {
  let result = String(num);

  if (num % 100 !== 11 && num % 10 === 1) result += 'st';
  else if (num % 100 !== 12 && num % 10 === 2) result += 'nd';
  else if (num % 100 !== 13 && num % 10 === 3) result += 'rd';
  else result += 'th';

  return result;
}
// for (let i = 0; i <= 100; i++) console.log(suffix(i));

const NUMS = 6;
let nums = [];

for (let i = 1; i < NUMS; i++) {
  nums[i - 1] = prompt(`Enter the ${suffix(i)} number: `);
}

lastNum = prompt(`Enter the last number: `);
appearStr = nums.includes(lastNum) ? 'appears' : 'does not appear';
console.log(`The number ${lastNum} ${appearStr} in [${nums}].`);

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
// The number 17 appears in [25, 15, 20, 17, 23].

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
// The number 18 does not appear in [25, 15, 20, 17, 23].
