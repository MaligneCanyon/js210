let today = new Date();

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
  console.log(`Today's date is ${formattedDay(date)}, ${formattedMonth(date)} ${dateSuffix(dayNum)}`);
}

// pp6
console.log(`Today's date is ${formattedDay(today)}, ${today.getMonth()} ${dateSuffix(today.getDate())}`);

// pp8
formattedDate(today);
