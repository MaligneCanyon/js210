function matrixSums(arr) {
  return arr.map(elem => elem.reduce((accum, elem) => accum + elem, 0));
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
