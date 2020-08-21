// inputs:
// - str
// outputs:
// - str
// reqs:
// - given an input str, replace all sequences of non-alphabetic chars w/ a single space char
// rules:
//   /[a-z]/gi   matches all alphabetic chars
//   /[^a-z]/gi  matches all non-alphabetic chars
//   /[^a-z]+/gi matches all sequences of non-alphabetic chars
// testcases:
// - as below
// struct:
// - str
// algo:
// - replace one or more non-alphabetic chars in a str w/ a single space
// - rtn the updated str

function cleanUp(str) {
  return str.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
