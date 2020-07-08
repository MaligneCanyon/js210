// inputs:
// - string
// outputs:
// - hash
// reqs:
// - take a space-sepd str as input
// - rtn a hash listing the number of words of different sizes
//   - store the result as a k:v pair w/ format length:number
// rules:
// - str w/ >=1 word
// - words are any substr not including a space
// struct:
// - array (to hold words)
// algo:
// - init a hash to {}
// - if the str is not empty
//   - split the str into words
//   - for each word
//     - create a key for that word size
//     - if the key does not exist, add the key to the hash (with value 1)
//     - if the key does exist, increment the value for that key
// - rtn the hash

function wordSizes(str) {
  let hsh = {};
  let myKey;

  if (str) { // exclude empty strs
    str.split(' ').forEach(word => {
      myKey = word.length;
      if (hsh[myKey]) hsh[myKey]++;
      else hsh[myKey] = 1;
    });
  }

  return hsh;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
