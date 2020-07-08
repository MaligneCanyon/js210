// inputs:
// - arr
// outputs:
// - arr
// reqs:
// - rotate an arr by moving the 1st elem to the end of the arr; do not mutate the original arr
// rules:
// - rtn undefined if the arg is not an arr
// - rtn [] if the arg is an empty arr
// struct:
// - arr
// algo:
// - if the input is an arr
//   - if the arr is empty
//     - rtn an empty arr
//   - else
//     - create a new arr (a copy of the input arr)
//     - shift out the 1st elem of the new arr
//     - push the shifted-out elem onto the end of the new arr
//     - rtn the new arr
// - else
//   - rtn undefined

function rotateArray(arr) {
  // var newArr = [];

  if (Array.isArray(arr)) {
    if (arr.length) {
      // newArr = arr.slice();
      // newArr.push(newArr.shift());
      // return newArr;
      return arr.slice(1).concat(arr[0]); // from the Solution
    } else return [];
  } else return undefined; // could use 'return;' but better to be explicit
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
