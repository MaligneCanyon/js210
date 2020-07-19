// inputs:
// - int
// outputs:
// - none (logged ints)
// reqs:
// - calc and output multiples of the input int
// - both the input int and its multiples lie w/i the range 0..100
// - log the multiples in descending order
// rules:
// - the only multiple of 0 is 0 (and it's not odd)
// - otherwise,
//   the max multiple is floor(100 / input) * input
// - there will always be at least one multiple (the input int itself)
// struct:
// - numeric
// algo:
// - if the input is 0, return immediately
// - calc the first (i.e. max) multiple
// - while the multiple is >= the input
//   - if the multiple is odd
//     - log the multiple
//   - subtract the input from the multiple

function logMultiples(input) {
  let multiple;

  if (input === 0) return;
  multiple = Math.floor(100 / input) * input;
  for (; multiple >= input; multiple -= input) {
    if (multiple % 2) console.log(multiple);
  }
}

// function logMultiples(num) {
//   let arr = [];
//   if (num === 0) return;
//   for (let i = num; i <= 100; i += num) {
//     if (i % 2) arr.push(i);
//   }
//   arr.reverse().forEach(elem => console.log(elem));
// }

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21

// logMultiples(100); // no output
// logMultiples(99); // 99
// logMultiples(1); // 99, 97, 95, ..., 5, 3, 1
// logMultiples(0); // no output
