// inputs:
// - str, int, int
// outputs:
// - str
// reqs:
// - rtn a substr of the input str, starting at the 'start' ndx and running up to (but excluding)
//   the 'end' ndx
// rules:
//   - If both start and end are positive integers, start is less than end, and both are within the
//     boundary of the string, return the substring from the start index (inclusive), to the end
//     index (NOT inclusive).
//   - If the value of start is greater than end, swap the values of the two, then return the
//     substring as described above.
//   - If start is equal to end, return an empty string.
//   - If end is omitted, the end variable inside the function is undefined. Return the substring
//     starting at position start up through (and including) the end of the string.
//   - If either start or end is less than 0 or NaN, treat it as 0.
//   - If either start or end is greater than the length of the string, treat it as equal to the
//     string length.
// struct:
// - String
// algo:
// - init a newStr to ''
// - condition the inputs to allow a meaningful result
//   - if (start < 0 or isNaN(start))
//     - start = 0
//   - else if (start > str.length)
//     - start = str.length
//   - if (!end) end = str.length
//   - else if (end < 0 or isNaN(end))
//     - end = 0
//   - else if (end > str.length)
//     - end = str.length
//   - if (start > end)
//     - temp = start
//     - start = end
//     - end = temp
// - for (end - start) chars, starting at the 'start' ndx
//   - append the str char to the newStr
// - rtn the newStr

function condition(start, end, size) {
  let temp;

  if (start < 0 || isNaN(start)) start = 0;
  else if (start > size) start = size;

  if (end === undefined) {
    end = size;
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  } else if (end > size) {
    end = size;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  // console.log(start, end, size);
  return [start, end];
}

function substring(str, start, end) {
  let newStr = '';
  let arr = condition(start, end, str.length);

  start = arr[0];
  end = arr[1];
  for (let i = start; i < end; i++) newStr += str[i];

  return newStr;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"

console.log(substring(string, 14, 2));   // "llo world"
