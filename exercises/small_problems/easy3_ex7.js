// inputs:
// - arr
// outputs:
// - arr
// reqs:
// - rtn an arr w/ elems of the input arr replaced by a running total of the input arr elem values
// rules:
// - none
// struct:
// - arr, numeric
// algo:
// - init a total to arr[0]
// - for each subsequent elem of the arr
//   - add the arr elem value to the total
//   - replace the arr elem value w/ the total
// - rtn the arr

// function runningTotal(arr) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     total += arr[i];
//     arr[i] = total;
//   }

//   return arr;
// }

function runningTotal(arr) {
  let total = 0;
  return arr.map(elem => total = elem + total);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
