function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

console.log(indexOf([1,2,3,4,5,6,7,8,7,10], 7));  // 6
console.log(indexOf([1,2,3,4,5,6,7,8,9,10], 23)); // -1
