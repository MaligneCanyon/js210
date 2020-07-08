function penultimate(string) {
  // return string.split(' ')[-2]; // there's no -2 arr ndx in JS

  // this works (but is repetitive); rtns the 2nd last elem from the arr
  // return string.split(' ')[(string.split(' ')).length - 2];

  return string.split(' ').slice(-2)[0]; // slice off the last 2 elems and rtn the 1st of them
}

console.log(penultimate('last word'));                    // expected: "last" // rtns undefined
console.log(penultimate('Launch School is great!'));      // expected: "is"   // rtns undefined
