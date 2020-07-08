function slice(arr, begin, end) {
  let newArr = [];

  // if (begin > arr.length) begin = arr.length; // n/r
  if (end > arr.length) end = arr.length;
  for (let i = begin; i < end; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]


function splice(arr, start, deleteCount) {
  let newArr = [];
  let addCount = arguments.length - 3;

  // delete old elems
  if (deleteCount > arr.length - start) deleteCount = arr.length - start;
  for (let i = start; i < arr.length; i++) {
    if (i < start + deleteCount) newArr.push(arr[i]);
    arr[i] = arr[i + deleteCount]; // move remaining elems to the left
  }
  arr.length -= deleteCount; // truncate the arr

  // add new elems
  if (addCount > 0) {
    if (start > arr.length) start = arr.length;

    // first move the existing elems to the right ...
    for (let i = arr.length - 1; i >= start; i--) {
      arr[i + addCount] = arr[i];
    }

    // ... then add the new ones, beginning at the start ndx w/ the 1st new elem
    for (let i = start, j = 3; i < start + addCount; i++, j++) {
      arr[i] = arguments[j];
    }
  }

  return newArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 5, 'a'));               // [2, 3]
console.log(arr);                                  // [1, "a"]
