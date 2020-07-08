// inputs:
// - int (num of digits)
// outputs:
// - int (ndx of fib num)
// reqs:
// - calc and rtn the ndx of 1st fib num w/ the specified num of digits
// rules:
// - 1st fib num has ndx == 1
// - Fib(n) = Fib(n-2) + Fib(n-1)
// - input num is always >= 2
// - fib nums == [0, 1, 1, 2, 3, 5, 8]
// struct:
// - numeric
// algo:
// - init fib1, fib2 to 5, 8
// - init ndx to 7
// - for each ndx
//   - calc fib3
//     - fib3 = fib1 + fib2
//   - rtn the ndx if the num of digits in fib3 is >= the input num
//   - set fib1 to fib2
//   - set fib2 to fib3
//   - increment the ndx

function findFibonacciIndexByLength(num) {
  let fib1 = 5;
  let fib2 = 8;
  let fib3;

  for (let ndx = 7; ; ndx++) {
    fib3 = fib1 + fib2;
    if (String(fib3).length >= num) return ndx;
    fib1 = fib2;
    fib2 = fib3;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
