function stringToInteger(str) {
  let num = 0;
  const DIGITS = {
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
    num += DIGITS[str[i]] * Math.pow(10, j);
  }

  return num;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
