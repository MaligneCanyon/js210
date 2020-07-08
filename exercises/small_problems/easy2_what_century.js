function century(year) {
  let hundreds = Math.floor(year / 100);
  let tens = year % 100;

  centurium = (tens === 0) ? hundreds : hundreds + 1;

  console.log(String(centurium) + suffix(centurium));
  return String(centurium) + suffix(centurium);
}

function suffix(num) {
  if (Math.floor((num % 100) / 10) === 1) return 'th'; // ends with 10..19
  if (num % 100 === 1) return 'st'; // ends with 1
  if (num % 100 === 2) return 'nd'; // ends with 2
  if (num % 100 === 3) return 'rd'; // ends with 3
  return 'th'; // all others
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
