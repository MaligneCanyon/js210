// inputs:
// - num
// outputs:
// - num
// reqs:
// - calc the total num of Friday the 13ths in a specified year
// - rtn the total
// rules:
// - input year > 1752
// struct:
// - Date
// algo:
// - init a total to 0
// - for each month
//   - if the 13th day is a Friday
//     - incr the total
// - rtn the total

function fridayThe13ths(year) {
  let total = 0;
  let date;

  for (let month = 1; month <= 12; month++) {
    date = new Date(`${month}/13/${year}`); // mm/dd/yyyy format
    // console.log(date);
    if (date.toLocaleDateString(undefined, {weekday: 'long'}) === 'Friday') total++;
  }

  return total;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
