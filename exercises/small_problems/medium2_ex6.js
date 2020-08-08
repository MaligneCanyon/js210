// reqs:
// - given an input num
// - compute the first num positive ints
// - compute the square of the sum of the ints
// - compute the sum of the square of the ints
// - compute the dif btwn the two sums
// - rtn the dif
// algo:
// - init an arr to []
// - for each int from 1 to n
//   - add the int to the arr
// - reduce the arr to a total
// - sq the total
// - map the sq of each elem to the arr
// - reduce the arr to a total
// - compute the dif btwn the sq of the 1st total and the 2nd total

// function sumSquareDifference(n) {
//   let arr = [];
//   let total1;
//   let total2;

//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   total1 = arr.reduce((accum, elem) => accum + elem);
//   total1 *= total1;
//   total2 = arr.map(elem => elem * elem).reduce((accum, elem) => accum + elem);

//   return total1 - total2;
// }


// simpler method ...
function sumSquareDifference(num) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
    sumOfSquares += i * i;
  }

  return sum * sum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
