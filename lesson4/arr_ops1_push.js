function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

var count = [0, 1, 2];
var c2 = count;
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
console.log(c2);                     // [ 0, 1, 2, 3 ] // adding a new elem mutates the arr
