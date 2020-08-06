// inputs:
// - 2 nums
// outputs:
// - num
// reqs:
// - rotate the last n digits of a num
// - rtn the rotated num
// rules:
// - none
// struct:
// - str
// algo:
// - convert the num to a str
// - slice off the last n chars of the str (save both the beginStr and endStr substrs)
// - rotate the chars of the endStr substr
// - join the beginStr and rotated endStr substrs to form a new str
// - convert the new str to a new nume
// - rtn the new num

function rotateRightmostDigits(num, digits) {
  let str = String(num);
  let endStr = str.slice(-digits);
  let beginStr = str.slice(0, str.length - digits);
  // console.log(str, beginStr, endStr);

  endStr = endStr.slice(1).concat(endStr[0]);
  str = beginStr.concat(endStr);
  return Number(str);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
