// algo:
// - init a newArr to []
// - for each elem of the 1st subarr
//   - multiply the elem by the corresponding elem of the 2nd subarr
//   - push the result to the newArr
// - rtn the newArr

function multiplyList(arr1, arr2) {
  let newArr = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   newArr[i] = arr1[i] * arr2[i];
  // }

  arr1.forEach((elem, ndx) => {
    newArr.push(elem * arr2[ndx]);
  });

  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
