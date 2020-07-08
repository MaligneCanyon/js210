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

function checkGoldbach(n) {
  let max;

  if (n < 4 || n % 2) console.log(null);
  else {
    max = Math.floor(n / 2);
    for (i = 2; i <= max; i++) {
      // console.log(i, n, max);
      if (isPrime(i) && isPrime(n - i)) console.log(i, n - i);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
