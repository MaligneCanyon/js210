// inputs:
// - nested arr
// outputs:
// - nested arr
// reqs:
// - transpose the rows and cols of a nested arr; rtn the result
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
//   - for each row
//     - push the arr elem of the current row and col into the subArr
//   - push the subArr into the newArr
// - rtn the newArr

function transpose(arr) {
  var newArr = [];
  var subArr;
  var rows = arr.length;
  var cols = arr[0].length;
  var row;
  var col;

  for (col = 0; col < cols; col++) {
    subArr = [];
    for (row = 0; row < rows; row++) {
      subArr.push(arr[row][col]);
    }
    newArr.push(subArr);
  }

  return newArr;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
