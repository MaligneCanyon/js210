function backAndForth(arr) {
  return arr.concat(arr.slice().reverse());
}

let arr = [1, 2, 3, 4];
console.log(backAndForth(arr)); // [1, 2, 3, 4, 4, 3, 2, 1]
console.log(arr); // non-mutating
