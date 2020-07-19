function repeat(str, times) {

  if (times === 0) return '';
  // if (times < 0 || isNaN(times) || !times) return undefined; // doesn't work w/ (times === '  ')
  if (times < 0 || (typeof(times) !== 'number')) return undefined;

  let output = '';
  for (let i = 0; i < times; i++) {
    output += str;
  }

  return output;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

// Note: the solution uses the following fn to test whether the rtn value should be 'undefined'
function isPositiveInteger(value) {
  return Number(value) === value && value >= 0; // rtns T for 0; could rtn T for a +ve fp too ...
}
console.log(isPositiveInteger(0));   // true (incorrect)
console.log(isPositiveInteger(3.1)); // true (incorrect)
