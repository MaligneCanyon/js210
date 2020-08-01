// inputs:
// - Array
// outputs:
// - Array (nested, with 2 subarrays)
// reqs:
// - split an array into 2 subarrays
// - return the subarrays as a nested array
// rules:
// - if the array contains an odd number of elements, the mid element
//   should be placed in the 1st subarray
//   - [0,1,2,3,4] -> [[0,1,2], [3,4]]
//   - [0,1,2,3]   -> [[0,1],   [2,3]]
// struct:
// - Array
// algo:
// - calc the array midpoint
// - for each array element
//   - for elements upto and including the midpoint,
//     - place the element in the 1st subarray
//   - for remaining elements,
//     - place the element in the 2nd subarray
// - return the nested array

function halvsies(arr) {
  let midpt = Math.ceil(arr.length / 2);
  return [arr.slice(0, midpt), arr.slice(midpt)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
