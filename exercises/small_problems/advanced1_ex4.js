// inputs:
// - nested arr
// outputs:
// - nested arr
// reqs:
// - rotate the arr 90deg clockwise; rtn the result
// rules:
// - none
// struct:
// - arr
// algo:
// - init a newArr to []
// - calc the num of rows
// - calc the num of cols
// - for each col
//   - init a subArr to []
//   - for each row (bottom to top)
//     - push the arr elem of the current row and col into the subArr
//   - push the subArr into the newArr
// - rtn the newArr

// Note: v.sim to the transpose() fn from advanced1_ex2-3
function rotate90(arr) {
  var newArr = [];
  var subArr;
  var rows = arr.length;
  var cols = arr[0].length;
  var row;
  var col;

  for (col = 0; col < cols; col++) {
    subArr = [];
    for (row = rows - 1; row >= 0; row--) { // this is the only line that differs
      subArr.push(arr[row][col]);
    }
    newArr.push(subArr);
  }

  return newArr;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
