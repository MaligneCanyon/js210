// inputs:
// - 2 strs
// outputs:
// - boolean
// reqs:
// - rtn T or F depending on whether the 1st input str starts w/ the 2nd input str
// rules:
// - rtn T if 2nd input str is ''
// struct:
// - String
// algo:
// - for each char in str2
//   - if the char at the current ndx in str1 doesn't match the corresponding char in str2
//     - rtn F
// - rtn T (end of str2 reached and all chars match)

function startsWith(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
console.log(startsWith(longerString, str));      // true
