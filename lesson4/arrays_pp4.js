function indexOf(value, arr) {
  let ndx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      ndx = i;
      break;
    }
  }

  return ndx;
}

console.log(indexOf(7, [1,2,3,4,5,6,7,8,9,10]));
console.log(indexOf(23, [1,2,3,4,5,6,7,8,9,10]));
