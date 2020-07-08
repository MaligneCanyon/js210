function concat(arr1) {
  let newArr = arr1.slice();

  for (let j = 1; j < arguments.length; j++) {
    if (Array.isArray(arguments[j])) {
      for (let k = 0; k < arguments[j].length; k++) {
        newArr.push(arguments[j][k]);
      }
    } else newArr.push(arguments[j]);
  }

  // console.log(arguments);
  // console.log(arr1); // should be unmutated
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
