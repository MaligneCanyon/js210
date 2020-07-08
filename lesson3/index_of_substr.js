// inputs:
// - two strs
// outputs:
// - int
// reqs:
// - calc and rtn the ndx of the 1st (or last) occurence of the 2nd input str in the 1st input str
// - rtn -1 if the 2nd str not found
// rules:
// - none
// struct:
// - str
// algo:
// - for each char in the 1st str
//   - look for the 1st char of the 2nd str
//     - if found
//       - save the ndx of the char in the 1st str
//       - for each subsequent char in the 2nd str
//         - compare that char w/ the corresponding subsequent char in the 1st str
//           - if the chars are dif
//             - break
//       - rtn the ndx
//     - else
//       - rtn -1

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

function lastIndexOf(str1, str2) {
  let ndx;
  let lastNdx = -1;
  let str;

  do {
    ndx = indexOf(str1, str2);
    if (ndx === -1) return lastNdx; // no match (or no more matches)
    str = '';
    for (let i = ndx + 1; i < str1.length; i++) {
      str += str1[i]; // build a new str starting just after the last found ndx
    }
    str1 = str; // next iteration, we want to chk the new str for a match
    // lastNdx = (lastNdx === -1) ? ndx : lastNdx + ndx + 1;
    lastNdx += ndx + 1;
  } while (true);
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

console.log(indexOf('Blue Whale', 'alert'));                    // -1
console.log(lastIndexOf('Blue Whale, Killer Whale', 'eBlue'));  // -1
console.log(lastIndexOf('Some super silly string', 's'));       // 17

console.log(indexOf('sexxxxxxy', 'xxx'));                       // 2
console.log(lastIndexOf('sexxxxxxy', 'xxx'));                   // 5
