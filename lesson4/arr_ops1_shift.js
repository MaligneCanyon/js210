function shift(arr) {
  let firstElem;

  if (!arr.length) return undefined; // empty arr

  firstElem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
  return firstElem;
}

var count = [1, 2, 3];
// var repeats = count.length;
// for (let i = 0; i < repeats; i++) {
  console.log(shift(count));           // 1
  console.log(count);                  // [ 2, 3 ]
// }

count = [];
console.log(shift(count));           // undefined
console.log(count);                  // []

