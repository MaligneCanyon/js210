const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today = new Date();
let dayNdx = today.getDay();
let dayNum = today.getDate();
let suffix = 'th'; // not really true

console.log(`Today's date is ${DAYS_OF_WEEK[dayNdx]}, the ${dayNum}${suffix}`);
