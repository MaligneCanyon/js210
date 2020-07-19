function pop(arr) {
  let lastElem;

  if (!arr.length) return undefined; // empty arr

  lastElem = arr[arr.length - 1];
  arr.length--;
  return lastElem;
}

var count = [1, 2, 3];
var c2 = count;
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
console.log(c2);                     // [ 1, 2 ] // changing arr.length mutates the arr

count = [];
console.log(pop(count));             // undefined
console.log(count);                  // []
