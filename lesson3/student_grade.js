// inputs:
// - 3 ints
// outputs:
// - str
// reqs:
// - obtain 3 ints from user input, calc the avg and output a letter (grade) representing the avg
// rules:
//     If the average score is greater than or equal to 90 then the grade is 'A'
//     If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
//     If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
//     If the average score is less than 50 then the grade is 'F'
// struct:
// - num, str
// algo:
// - init a counter to 1
// - init a total to 0
// - while counter <= 3
//   - obtain an input from the user
//   - add the input to the total
// - div the total by 3 to obtain the avg
// - determine and log the grade based on the above rules

function grade() {
  let total = 0;
  let avg;
  let grade;
  const GRADES = 3;

  for (let i = 1; i <= GRADES; i++) {
    total += Number(prompt(`Enter score ${i}:`));
  }

  avg = total / GRADES;
  // console.log(avg);
  if (avg >= 90) grade = 'A';
  else if (avg >= 70) grade = 'B';
  else if (avg >= 50) grade = 'C';
  else grade = 'F';
  console.log(`Based on the average of your ${GRADES} scores your letter grade is "${grade}".`);
}

grade();

// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// log to the console
// Based on the average of your 3 scores your letter grade is "B".
