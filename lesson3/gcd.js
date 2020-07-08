// inputs:
// - 2 ints
// outputs:
// - int
// reqs:
// - calc and output the GCD of the 2 input ints
// rules:
// - GCD in range intMin..1 where intMin is the smaller of the 2 ints
// struct:
// - numeric
// algo:
// - init the divisor to the smaller int
// - while the divisor is >= 1
//   - if the divisor is a divisor of the smaller int
//     - if a divisor is also a divisor of the larger int
//       - rtn the divisor
//   - decrement the divisor

function gcd(int1, int2) {
  let intMin = Math.min(int1, int2);
  let intMax = Math.max(int1, int2);

  for (let div = intMin; div > 0; div--) {
    // console.log(intMin, intMax, div);
    if ((intMin % div === 0) && (intMax % div === 0)) return div; // a common divisor found
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
