// inputs:
// - str
// outputs:
// - int
// reqs:
// - take a str
// - rtn the sum of the ascii values of the str chars
// rules:
// - none
// testcases:
// - as below
// struct:
// - arr
// algo:
// - split the str into an arr of chars
// - map the ascii values of each char to the arr
// - reduce the arr to a total
// - rtn the total

function asciiValue(str) {
  return str.split('').map(char => char.charCodeAt(0)).reduce((accum, value) => accum + value, 0);
}

// function asciiValue(str) {
//   let sum = 0;
//   // for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i);
//   for (let i = 0; i < str.length; sum += str.charCodeAt(i++)); // just for fun
//   return sum;
// }

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
