// inputs:
// - ints (3 scores)
// outputs:
// - str (final grade)
// reqs:
// - take 3 ints, avg them and rtn a letter grade corresponding to the avg
// rules:
//     90 <= score <= 100: 'A'
//     80 <= score < 90: 'B'
//     70 <= score < 80: 'C'
//     60 <= score < 70: 'D'
//     0  <= score < 60: 'F'
// testcases:
// - as below
// struct:
// - num
// algo:
// - reduce the inputs to a total and compute the avg
// - determine and rtn the corresponding letter grade

function getGrade(...arr) {
  let avg = arr.reduce((accum, elem) => accum + elem) / arr.length;
  if (avg < 60) return 'F';
  if (avg < 70) return 'D';
  if (avg < 80) return 'C';
  if (avg < 90) return 'B';
  return 'A';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(80, 80, 80));    // "b"
console.log(getGrade(80, 80, 79));    // "c"
