// inputs:
// - str
// outputs:
// - obj
// reqs:
// - rtn an obj containing a count of repeated chars from the input str
// - only rtn chars w/ > 1 occurence in the str
// - ignore case
// rules:
// - none
// struct:
// - str, obj
// algo:
// - init an obj to {}
// - for each char in the str
//   - convert the char to lowercase
//   - if the obj contains the char, incr its count
//   - else add the char to the obj and init its count to 1
// - for each key in the obj
//   - if the value for the key is 1
//     - delete the key:value pair from the obj
// - rtn the obj

function repeatedCharacters(str) {
  let obj = {};

  str.toLowerCase().split('').forEach(char => {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  });

  for (prop in obj) {
    // if (obj.prop < 2) delete(obj.prop); // no; must use bracket notation; 'prop' is a var
    if (obj[prop] < 2) delete(obj[prop]);
  }

  return obj;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
