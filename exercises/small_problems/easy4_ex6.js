// algo:
// - reduce the arr to a product total
// - div the result by the num of arr elems
// - round the result to 3 decimal places
// - rtn the result

function showMultiplicativeAverage(arr) {
  return (arr.reduce((accum, elem) => accum * elem, 1) / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
