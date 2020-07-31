// inputs:
// - arr (of ints)
// outputs:
// - arr (of ints)
// reqs:
// - take an arr of ints
// - rtn an arr of ints of the same length as input arr
// - each rtn'd arr elem is a running total of the values in the input arr
// rules:
// - none
// struct:
// - arr
// algo:
// - map a running total of elems in the input arr to a newArr
// algo:
// - init a total to 0
// - for each elem of the arr
//   - add the arr elem value to the total
//   - map the total to the newArr
// - rtn the newArr

// function runningTotal(arr) {
//   return arr.map((elem, ndx) => arr.slice(0, ndx + 1).reduce((accum, elem) => accum + elem));
// }

function runningTotal(arr) {
  let total = 0;
  return arr.map(elem => total = elem + total);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
