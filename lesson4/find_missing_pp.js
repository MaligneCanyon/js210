// inputs:
// - arr
// outputs:
// - arr
// reqs:
// - rtn an arr of ints, containing missing ints btwn the 1st and last elem of the sorted input arr
// rules:
// - none
// struct:
// - arr
// algo:
// - init a newArr to []
// - set a minValue to the first elem of the arr
// - set a maxValue to the last elem of the arr
// - for each value btwn (but excluding) the min and max values
//   - if the arr does not contain the value
//     - add the value to the newArr
// - rtn the newArr

function missing(arr) {
  let newArr = [];

  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) newArr.push(i);
  }

  console.log(newArr);
  return newArr;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
