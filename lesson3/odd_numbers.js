function logOddNumbers(int) {
  if (int > 0) {
    for (let i = 1; i <= int; i += 2) {
      console.log(i);
    }
  } else {
    console.log("positive ints only please");
  }
}

logOddNumbers(19);
// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

logOddNumbers(0);
logOddNumbers(-19);
