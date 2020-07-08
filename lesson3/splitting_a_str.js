// inputs:
// - str, char
// outputs:
// - logged str segments
// reqs:
//  - take two args:
//     a str to be split
//     a delimiter character
// - split the str at the delimiter
// - log the split str segments (excluding the delimiter) to the console
// rules:
// - if the delimiter is '', split the str into individual chars
// struct:
// - str
// algo:
// - init an arr to []
// - init a substr to ''
// - for each char in the input str
//   - if the delimiter is ''
//     - add the char to the arr
//   - else if delimiter the is the char
//     - add the substr to the arr
//     - reset the substr to ''
//   - else
//     - add the char to the substr
// - add any remaining chars in str to the arr
// - log each elem of the arr

function splitString(str, delimiter) {
  let arr = [];
  let substr = '';

  if (delimiter === undefined) {
    console.log('ERROR: no delimiter');
    return;
  }

  for (i = 0; i < str.length; i++) {
    if (delimiter === '') {
      arr.push(str[i]);
    } else if (delimiter === str[i]) {
      arr.push(substr);
      substr = '';
    } else substr += str[i];
  }

  if (substr) arr.push(substr); // don't push an empty substr to the arr

  arr.forEach(elem => console.log(elem));
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
