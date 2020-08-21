// inputs:
// - int
// outputs:
// - str
// reqs:
// - given an int year, rtn a str beginning w/ the century and ending w/ an appropriate suffix for
//   the century num
// rules:
// - years ending in 01..00 comprise a century
// testcases:
// - as below
// struct:
// - num
// algo:
// - compute the century num
// - determine an appropriate suffix for the century num
// - rtn a str comprised of the century num and its suffix

function century(year) {
  let centuryNum = Math.floor(year / 100);
  if (year % 100) centuryNum++;
  // console.log(suffix(centuryNum));
  return String(centuryNum) + suffix(centuryNum);
}

function suffix(num) {
  if (Math.floor((num % 100) / 10) === 1) return 'th'; // ends with 10..19
  if (num % 100 === 1) return 'st'; // ends with 1
  if (num % 100 === 2) return 'nd'; // ends with 2
  if (num % 100 === 3) return 'rd'; // ends with 3
  return 'th'; // all others
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
