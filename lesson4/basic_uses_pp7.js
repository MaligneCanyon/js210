// pp6 published Solution
function pp6lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

function lastNOf(arr, count) {
  return arr.slice(-count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(pp6lastNOf(digits, 10)); // pp6 published Solution rtns [15, 16, 23, 42]
console.log(lastNOf(digits, 10)); // this version rtns [4, 8, 15, 16, 23, 42]
