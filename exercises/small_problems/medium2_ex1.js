// inputs:
// - str
// outputs:
// - obj
// reqs:
// - take a str
// - rtn an obj that contains 3 key:value pairs representing the % of
//   lowercase or uppercase letters, or other chars in the str
// rules:
// - one key:value pair for each char type
// struct:
// - arr (to hold str chars)
// algo:
// - init the output obj
// - split the str into an arr of individual chars
// - for each char
//   - increment the appropriate value for the type of char
// - for each obj elem
//   - convert the value to a percentage of total chars
// - rtn the output obj

function letterPercentages(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  let factor = str.length / 100;

  let arr = str.split('');
  arr.forEach(char => {
    if (/[a-z]/.test(char)) obj.lowercase++;
    else if (/[A-Z]/.test(char)) obj.uppercase++;
    else obj.neither++;
  });

  for (key in obj) {
    obj[key] = (obj[key] / factor).toFixed(2);
  }

  return obj;
}


// from the Solution ...
// function formatAsPercentage(str, pattern) {
//   return ((str.match(pattern) || []).length / str.length * 100).toFixed(2);
// }

// function letterPercentages(str) {
//   return {
//     lowercase: formatAsPercentage(str, /[a-z]/g),
//     uppercase: formatAsPercentage(str, /[A-Z]/g),
//     neither:   formatAsPercentage(str, /[^a-z]/gi),
//   };
// }


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
