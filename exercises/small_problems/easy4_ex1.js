function padWithZeros(value) {
  const CHARS = 2;
  let str = String(value); // in case the arg was a num

  while (str.length < CHARS) str = '0' + str;
  return str;
}

function dms(fpDeg) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;

  let deg = Math.floor(fpDeg);
  let fpMin = (fpDeg - deg) * MINUTES_PER_DEGREE;
  let min = Math.floor(fpMin);
  let fpSec = (fpMin - min) * SECONDS_PER_MINUTE;
  let sec = Math.floor(fpSec);

  return `${deg}°${padWithZeros(min)}'${padWithZeros(sec)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
