function addToArr(arrOne, arrTwo) {
  for (let i = 0; i < arrTwo.length; i++) {
    if (!arrOne.includes(arrTwo[i])) arrOne.push(arrTwo[i]); // should mutate arrOne
  }
}

function union(arr1, arr2) {
  let newArr = [];

  addToArr(newArr, arr1);
  addToArr(newArr, arr2);

  return newArr.sort(function(a, b) { return a - b; });
}

console.log(union([1, 3, 5], [3, 6, 9]));          // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3, 5, 2], [3, 9, 6, 9])); // [1, 2, 3, 5, 6, 9]
