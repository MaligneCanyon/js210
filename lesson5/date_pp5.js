const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today = new Date();
let dayNdx = today.getDay();
let dayNum = today.getDate();

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

console.log(`Today's date is ${DAYS_OF_WEEK[dayNdx]}, the ${dateSuffix(dayNum)}`);
