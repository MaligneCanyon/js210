// inputs:
// - 2 arrs
// outputs:
// - arr
// reqs:
// - merge 2 sorted arrs into 1 sorted arr
// rules:
// - none
// struct:
// - arr
// algo:
// - init a newArr to []
// - make copies of the input arrs
// - while at least one of the copies contains some elem(s)
//   - if arr1 is empty
//     - shift out an elem from arr2 and push it into the newArr
//   - else if arr2 is empty
//     - shift out an elem from arr1 and push it into the newArr
//   - else if arr1[0] < arr2[0]
//     - shift out an elem from arr1 and push it into the newArr
//   - else
//     - shift out an elem from arr2 and push it into the newArr
// - rtn the newArr

function merge(arr1, arr2) {
  var newArr = [];

  arr1 = arr1.slice();
  arr2 = arr2.slice();

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) newArr.push(arr2.shift());
    else if (arr2.length === 0 || arr1[0] < arr2[0]) newArr.push(arr1.shift());
    else newArr.push(arr2.shift());
  }

  return newArr;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

var arrA = [1, 1, 3];
var arrB = [2, 2];
merge(arrA, arrB);
console.log(arrA, arrB); // [1, 1, 3], [2, 2]
