// algo:
// - determine the shorter and longer str
// - rtn the shorter plus longer plus short str

function shortLongShort(str1, str2) {
  // [short, long] = [str1, str2].sort((a, b) => a.length - b.length);
  // return short + long + short;

  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
