function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function splice(arr, start, num) {
  let newArr = [];

  for (let i = start; i < start + num; i++) {
    newArr.push(arr[i]);
    arr[i] = arr[i + num];
  }

  arr.length -= num;
  return newArr;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
