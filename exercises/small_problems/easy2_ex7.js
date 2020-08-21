// inputs:
// - int
// outputs:
// - int
// reqs:
// - if the input int is a dble num, rtn the input
// - otherwise, rtn the input int * 2
// rules:
// - dble num if
//   - even-length
//   - left-side of num === right-side of num
// testcases:
// - as below
// struct:
// - str
// algo:
// - if the input is a dble num, rtn the input
// - else rtn the input * 2

function twice(num) {
  return doubleNum(num) ? num : num * 2;
}

function doubleNum(num) {
  let strNum = String(num);
  let halfLength = strNum.length / 2;

  if (strNum.length % 2) return false;
  return strNum.slice(0, halfLength) === strNum.slice(halfLength);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
