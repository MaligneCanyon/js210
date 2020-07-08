function swap(str) {
  // let arr = str.split(' ');
  // let newStr;
  // arr = arr.map(word => {
  //   if (word.length === 1) return word;
  //   else if (word.length === 2) return word[1] + word[0];
  //   else return word[word.length - 1] + word.slice(1, -1) + word[0];
  // });
  // newStr = arr.join (' ');
  // return newStr;

  return str.split(' ').map(word => {
    if (word.length === 1) return word;
    else if (word.length === 2) return word[1] + word[0];
    else return word[word.length - 1] + word.slice(1, -1) + word[0];
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
