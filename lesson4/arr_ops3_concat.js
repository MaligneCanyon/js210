function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArr = [];
  let i;

  for (i = 0; i < arr1.length; i++) {
    push(newArr, arr1[i]);
  }

  for (i = 0; i < arr2.length; i++) {
    push(newArr, arr2[i]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
console.log(concat([1, 2], [3, 4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
console.log(concat(arr1, arr2));                 // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1);                               // [1, 2, 3, 4]
console.log(arr2);                               // [5, 6]
