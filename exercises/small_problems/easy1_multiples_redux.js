// inputs:
// - int
// outputs:
// - int
// reqs:
// - calc the sum multiples of 3 and 5 for ints in range 1..num, where num is an input int
// - rtn the sum
// rules:
// - none
// struct:
// - numeric
// algo:
// - init a sum to 0
// - init a counter to 1
// - while the counter <= num
//   - if the counter is evenly divisible by 3 or 5
//     - add the counter to the sum
//   - incr the counter
// - rtn the sum

function multisum(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

console.log(multisum(20));      // 98
