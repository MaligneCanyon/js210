function shift(arr) {
  let firstElem;

  if (!arr.length) return undefined; // empty arr

  firstElem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
  return firstElem;
}

// function unshift(arr) {
//   for (let j = 1; j < arguments.length; j++) {
//     for (let i = arr.length; i > 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = arguments[j];
//   }
//
//   return arr.length;
// }

function unshift(arr) {
  let numNewElems = arguments.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + numNewElems] = arr[i]; // move existing elems numNewElems ndx positions to the right
  }

  for (let j = 0; j < numNewElems; j++) {
    arr[j] = arguments[j + 1]; // add the new elems to the beginning of the arr
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
