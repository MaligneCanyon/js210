const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today = new Date();
let dayNdx = today.getDay();

console.log(`Today's day is ${dayNdx}`);
console.log(`Today's day is ${DAYS_OF_WEEK[dayNdx]}`);
