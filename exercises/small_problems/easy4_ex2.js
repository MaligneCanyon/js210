function addNewElems(arrOne, arrTwo) {
  arrTwo.forEach(elem => {
    if (!arrOne.includes(elem)) arrOne.push(elem); // mutates arrOne
  });
}

function union(arr1, arr2) {
  let newArr = [];

  addNewElems(newArr, arr1);
  addNewElems(newArr, arr2);

  return newArr.sort(function(a, b) { return a - b; });
}

console.log(union([1, 3, 5], [3, 6, 9]));             // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3, 5, 2], [3, 9, 6, 9, 0])); // [0, 1, 2, 3, 5, 6, 9]
