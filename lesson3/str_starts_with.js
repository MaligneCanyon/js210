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
// - if (searchStr === '') or (indexOf(str1, str2) === 0) rtn T; otherwise rtn F

function startsWith(str, searchStr) {
  return (searchStr === '') || (indexOf(str, searchStr) === 0);
}

function indexOf(str1, str2) {
  let ndx;
  let found = false;

  // str1 = abcde; str2 = def // only need to check up to and including the 'c' in str1
  for (let i = 0; i <= (str1.length - str2.length); i++) {
    if (str1[i] === str2[0]) { // maybe a match
      ndx = i; // save the ndx
      found = true;
      for (let j = 1; j < str2.length; j++) { // compare subsequent chars of the two strs
        if (str1[i + j] !== str2[j]) { // not a match
          found = false;
          break;
        }
      }
      if (found) return ndx; // made it to the end of str2 and all str2 chars match
    }
  }

  return -1; // got to the 'c' and no match found
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
console.log(startsWith(longerString, str));      // true
