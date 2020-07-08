// inputs:
// - int (num to test)
// outputs:
// - boolean
// reqs:
// - rtn true if the input num is prime, false otherwise
// rules:
// - a num is prime if only evenly divisible by 1 and itself
//   - if num < 2 not prime (by definition)
//   - if num == 2 prime
//   - if num > 2 not prime if
//     - evenly divisible by 2 (even)
//     - evenly divisible by any odd int from 3 up to floor(num/2)
// struct:
// - numeric
// algo:
// - if num is < 2
//   - return false
// - else if num === 2
//   - return true
// - else if num % 2 === 0
//   - return false
// - else
//   - init a divisor to 3
//   - while divisor is < num / 2
//     - if num is evenly divisible by the divisor
//       - return false
//     - increment the divisor by 2
//   - return true

function isPrime(num) {
  if (num === 2) return true; // by definition
  if (num < 2 || num % 2 === 0) return false; // by definition || num is even

  // num is odd
  for (let div = 3; div < num / 2; div += 2) {
    // console.log(num, div);
    if (num % div === 0) return false;
  }
  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false

console.log(isPrime(4));   // false
console.log(isPrime(101)); // true
