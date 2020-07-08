// inputs:
// - none
// outputs:
// - str
// reqs:
// - calc and output multiples of 3 and 5 for ints in range 1..100
// - log nums that are multiples of 3 and/or 5
// - append an ! if a num is multiple of both 3 and 5
// rules:
// - a num is a multiple of both 3 and 5 if it is a multiple of their product, i.e. 15
// struct:
// - numeric
// algo:
// - init a counter to 1
// - while the counter <= 100
//   - if the counter is evenly divisible by 15
//     - log the counter plus an !
//   - else if the counter is evenly divisible by 3
//     - log the counter
//   - else if the counter is evenly divisible by 5
//     - log the counter
//   - incr the counter

function multiplesOfThreeAndFive() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(String(i) + '!');
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// ... remainder of output omitted for brevity
