function integerToString(num) {
  let rem;
  let str = '';
  const DIGIT_TO_CHAR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  do {
    rem = num % 10;
    str = DIGIT_TO_CHAR[rem] + str;
    num = Math.floor(num / 10);
    // console.log(rem, str, num);
  } while (num > 0);

  return str;
}

function signedIntegerToString(num) {
  let str;

  str = integerToString(Math.abs(num));

  if (num > 0) str = '+' + str;
  else if (num < 0) str = '-' + str;

  return str;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
