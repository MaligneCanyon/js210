function uniqueElements(arr) {
  let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  // }
  arr.forEach(elem => {
    if (!newArr.includes(elem)) newArr.push(elem);
  });

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
