// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of
// a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to
// its corresponding digit character.

// inputs:
// - str
// outputs:
// - str
// reqs:
// - w/i a str, convert any substr of chars representing an int to the corresponding digit
// - rtn the converted str
// rules:
// - words may have punctuation appended to them
// struct:
// - obj
// algo:
// - init an obj containing word:digit k:v pairs
// - for each word in the obj
//   - if the str contains the word
//     - replace each occurence of the word w/ the corresponding digit
// - rtn the new str

// function wordToDigit(str) {
//   const WORD_TO_DIGIT = {
//     'zero':  '0',
//     'one':   '1',
//     'two':   '2',
//     'three': '3',
//     'four':  '4',
//     'five':  '5',
//     'six':   '6',
//     'seven': '7',
//     'eight': '8',
//     'nine':  '9',
//   };
//   let pattern;

//   Object.keys(WORD_TO_DIGIT).forEach(word => {
//     // from the Solution ...
//     // pattern = new RegExp(word, 'g'); // doesn't work well with strs that include 'none' or 'weight' for ex.
//     pattern = new RegExp('\\b' + word + '\\b', 'g'); // create a new regex pattern for each word
//     str = str.replace(pattern, WORD_TO_DIGIT[word]);
//   });

//   return str;
// }

function wordToDigit(str) {
  const NUM_STRS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  NUM_STRS.forEach(numStr => {
    let regex = new RegExp(`\\b${numStr}\\b`, 'g');
    str = str.replace(regex, String(NUM_STRS.indexOf(numStr)));
  });

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.')); // "The weight is done."
