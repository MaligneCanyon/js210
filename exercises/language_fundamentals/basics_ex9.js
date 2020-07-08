function integerToString(num) {
  let rem;
  let str = '';
  // const DIGIT_TO_CHAR = {
  //   0: '0',
  //   1: '1',
  //   2: '2',
  //   3: '3',
  //   4: '4',
  //   5: '5',
  //   6: '6',
  //   7: '7',
  //   8: '8',
  //   9: '9',
  // };
  const DIGIT_TO_CHAR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  do {
    rem = num % 10;
    str = DIGIT_TO_CHAR[rem] + str;
    // num = (num - rem) / 10;
    num = Math.floor(num / 10);
    // console.log(rem, str, num);
  } while (num > 0);

  return str;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
