// inputs:
// - none
// outputs:
// - num, str
// reqs:
// - iterate over ints in range 1..100
// - for ints that are multiples of 3, log "Fizz"
// - for ints that are multiples of 5, log "Buzz"
// - for ints that are multiples of 3 and 5, log "FizzBuzz"
// rules:
// - ints that are multiples of 3 and 5 are multiples of 15
// struct:
// - numeric
// algo:
// - init a counter to 1
// - while the counter is <= 100
//   if the counter is evenly divisible by 15
//     log "FizzBuzz"
//   else if the counter is evenly divisible by 5
//     log "Buzz"
//   else if the counter is evenly divisible by 3
//     log "Fizz"
//   else
//     log the counter

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
}

fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// ... rest of output omitted for brevity
