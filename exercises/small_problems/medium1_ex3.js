// inputs:
// - num
// outputs:
// - num
// reqs:
// - rotate all the digits of a num, then
// - rotate all but the first digit of the num, then
// - rotate all but the first 2 digits of the num, then
// - ...
// - rotate all but the last 2 digits of the num
// - rtn the rotated num
// rules:
// - none
// struct:
// - str
// algo:
// - convert the num to a str
// - for n = str.length downto 2
//   - rotate the n last digits of the num
// - rtn the new num

function rotateRightmostDigits(num, digits) {
  let str = String(num);
  let endStr = str.slice(-digits);
  let beginStr = str.slice(0, str.length - digits);

  endStr = endStr.slice(1).concat(endStr[0]);
  str = beginStr.concat(endStr);
  return Number(str);
}

function maxRotation(num) {
  for (let i = String(num).length; i > 1; i--) {
    num = rotateRightmostDigits(num, i);
    // console.log(num, i);
  }

  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
