function dateSuffix(dayNum) {
  let result = String(dayNum);

  switch (dayNum) {
    case 1:
    case 21:
    case 31:
      result += 'st';
      break;
    case 2:
    case 22:
      result += 'nd';
      break;
    case 3:
    case 23:
      result += 'rd';
      break;
    default:
      result += 'th';
  }

  return result;
}

function formattedDay(date) {
  const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dayNdx = date.getDay();
  return DAYS_OF_WEEK[dayNdx];
}

function formattedMonth(date) {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthNdx = date.getMonth();
  return MONTHS[monthNdx];
}

function formattedDate(date) {
  let dayNum = date.getDate();
  // console.log(`Today's date is ${formattedDay(date)}, ${formattedMonth(date)} ${dateSuffix(dayNum)}`);
  // Always logs "Today's date is ...", no matter what date obj is passed in; not v.useful
  console.log(`The date is ${formattedDay(date)}, ${formattedMonth(date)} ${dateSuffix(dayNum)}`);
}

let today = new Date();
// let tomorrow = today; // no, will end up mutating 'today'
let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
console.log(today);
console.log(tomorrow);
formattedDate(today);
formattedDate(tomorrow);
