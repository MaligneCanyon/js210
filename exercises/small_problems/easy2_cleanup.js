// /[a-z]/gi matches all alphabetic chars
// /[^a-z]/gi matches all non-alphabetic chars
// /[^a-z]+/gi matches all occurences of one-or-more-consecutive non-alphabetic chars

function cleanUp(str) {
  return str.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
