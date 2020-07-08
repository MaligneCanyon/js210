function dms(angle) {
  const SECONDS_PER_MINUTE = 60;
  const SECONDS_PER_DEGREE = 3600;
  // const DEGREE = "\xC2\xB0"; // use '°' instead

  let sec = Math.round(angle * SECONDS_PER_DEGREE);
  let deg = Math.floor(sec / SECONDS_PER_DEGREE);
  sec %= SECONDS_PER_DEGREE;
  let min = Math.floor(sec / SECONDS_PER_MINUTE);
  sec %= SECONDS_PER_MINUTE;

  strDeg = String(deg);
  strMin = String(min);
  if (min < 10) strMin = '0' + strMin;
  strSec = String(sec);
  if (sec < 10) strSec = '0' + strSec;

  return strDeg + '°' + strMin + '\'' + strSec + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
