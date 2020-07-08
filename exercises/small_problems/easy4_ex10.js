function average(arr) {
  let avg = arr.reduce((accum, elem) => accum + elem, 0) / arr.length;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
