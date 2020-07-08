function sumSquareDifference(num) {
  var sum = 0;
  var sumOfSquares = 0;
  var i;

  for (i = 1; i <= num; i++) {
    sum += i;
    sumOfSquares += i * i;
  }

  return sum * sum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
