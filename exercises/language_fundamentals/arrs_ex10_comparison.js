// rtn a new arr sorted in ascending order
// Note: arr must be all numeric or all str
// function sortAscending(arr) {
//   if (arr.every(elem => typeof(elem) == 'string'))
//     return arr.slice().sort();
//   else if (arr.every(elem => typeof(elem) == 'number'))
//     return arr.slice().sort(function(a, b) { return a - b; });
//   else return arr;
// }

// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   arr1 = sortAscending(arr1);
//   arr2 = sortAscending(arr2);
//   // console.log(arr1, arr2);

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }

// from the solution ...
function areArraysEqual(arr1, arr2) {
  let ndx;

  if (arr1.length !== arr2.length) return false;

  arr2 = arr2.slice(); // don't mutate arr2 !
  for (let i = 0; i < arr1.length; i++) {
    ndx = arr2.indexOf(arr1[i]);
    if (ndx === -1) return false; // couldn't find the arr1 elem in arr2
    else delete(arr2[ndx]); // found the arr1 elem in arr2, so delete it from arr2
  }
  return true; // made it all the way thru arr1, and found all the arr1 elems in arr2
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true

console.log();
arrX = [1, 2, 3];
arrY = [3, 2, 1];
console.log(areArraysEqual(arrX, arrY));                            // true
console.log(arrX, arrY);                                            // [1, 2, 3], [3, 2, 1]
