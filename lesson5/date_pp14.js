function padTime(time) {
  let timeStr = String(time);

  if (timeStr.length === 1) timeStr = '0' + timeStr;
  return timeStr;
}

function formatTime(date) {
  return padTime(date.getHours()) + ':' + padTime(date.getMinutes());
}

let today = new Date();
console.log(formatTime(today));

let newYears = new Date(2020, 0, 1, 0, 1); // (year, month, day, hour, min)
console.log(formatTime(newYears));
