// pp3
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// pp4
function average(arr) {
  return sum(arr) / arr.length;
}
console.log(average([2, 5, 11, 4, 8]));

// pp5
let temperatures = [-7, -4, 12, 21, 32];
console.log(average(temperatures));
