// inputs:
// - 2 ints
// outputs:
// - arr
// reqs:
// - take 2 ints: a count and a starting num
// - create an arr of count ints that are multiples of the starting num
// rules:
// - if count is 0 rtn an empty arr
// test cases:
// - as below
// struct:
// - arr
// algo:
// - init an arr to []
// - if count is > 0
//   - for each of count times
//     - push count * start into the arr
// - rtn the arr

function sequence(count, start) {
  let arr = [];

  if (count > 0)
    for (let i = 1; i <= count; i++) arr.push(i * start);
  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
