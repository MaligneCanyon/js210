function generatePattern(n) {
  let asterisks;
  for (let i = 1, str = ''; i <= n; i++) {
    str += String(i);
    if (n < 10) { // one asterisk for each remaining num
      asterisks = n - i;
    } else if (i < 10) { // one asterisk for each remaining num < 10, plus two for each num >= 10
      asterisks = 2 * n - i - 9; // (9 - i) + (2 * (n - 9));
    } else { // two asterisks for each remaining num
      asterisks = 2 * (n - i);
    }
    console.log(str + '*'.repeat(asterisks));
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

generatePattern(12);