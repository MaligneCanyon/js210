// function range(start, end) {
//   var range = [];
//   var element;
//   for (element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }


// - in JS, fn decs w/ the same name replace the previously def'd fn,
// so the 2nd dec is used and the 1st dec is ignored
// - each invocation of fn range only uses the 1st arg
// - range recursively calls itself, but has no ending condition, so stack
// space is rapidly consumed
// - to fix, combine the desired fn'ality in a single fn

function range(start, end) {
  var range = [];
  var element;

  if (end === undefined) { // no 2nd arg provided
    end = start;
    start = 0;
  }

  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

console.log(range(10, 20)); // [10..20]
console.log(range(5));      // [0..5]
