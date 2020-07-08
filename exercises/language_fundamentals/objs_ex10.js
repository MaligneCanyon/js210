function afterMidnight(timeStr) {
  let date1 = new Date('1/1/2000'); // from the solution
  let date2 = new Date('1/1/2000' + ' ' + timeStr); // from the solution
  const MILLISECONDS_PER_MINUTE = 60000;

  return (date2.getTime() - date1.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  const MINUTES_PER_DAY = 1440;
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MINUTES_PER_DAY) deltaMinutes = 0;
  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
