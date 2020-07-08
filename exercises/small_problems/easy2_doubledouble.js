// - rules:
//   - if you split a str down the middle, and the str has an odd num of chars,
//     the left substr will be one char shorter than the right substr
// - algo:
//   - convert the str to a num
//   - if the str length is even
//     - split the str down the middle
//     - if the left portion of the str === the right portion of the str
//       - return the num
//     - else
//       - return num * 2
//   - else
//     - return num * 2

// function twice(num) {
//   let str = String(num);
//   let leftStr;
//   let rightStr;

//   if (str.length % 2) return num * 2;
//   leftStr = str.slice(0, str.length / 2);
//   rightStr = str.slice(str.length / 2);
//   if (leftStr === rightStr) return num;
//   return num * 2;
// }
function twice(num) {
  let str = String(num);
  let leftStr = str.slice(0, str.length / 2);
  let rightStr = str.slice(str.length / 2);

  console.log(leftStr, rightStr);
  return (leftStr === rightStr) ? num : num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
