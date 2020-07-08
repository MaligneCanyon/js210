function stringToInteger(str) {
  let num = 0;
  const CHAR_TO_DIGIT = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    num += CHAR_TO_DIGIT[str[i]] * Math.pow(10, j);
  }

  return num;
}

function stringToSignedInteger(str) {
  let sign = 1;

  if (str[0] === '-' || str[0] === '+') {
    if (str[0] === '-') sign = -1;
    str = str.slice(1);
  }

  return sign * stringToInteger(str);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

var string = '+1234';
console.log(stringToSignedInteger(string));      // 1234
console.log(string);                             // '+1234'
