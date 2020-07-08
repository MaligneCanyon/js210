// a dumber version of the lesson3 "student grade" practice problem

function getGrade(g1, g2, g3) {
  let total = g1 + g2 + g3;
  let avg;
  let grade;

  avg = total / 3;
  if (avg >= 90) grade = 'A';
  else if (avg >= 80) grade = 'B';
  else if (avg >= 70) grade = 'C';
  else if (avg >= 60) grade = 'D';
  else grade = 'F';

  console.log(grade);
  return grade;
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
