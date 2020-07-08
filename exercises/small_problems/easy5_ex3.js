// function reverseNumber(num) {
//   let arr = String(num).split('').reverse();

//   while (arr[0] === '0') arr.shift();

//   console.log(Number(arr.join('')));
//   return Number(arr.join(''));
// }

function reverseNumber(num) {
  let arr = String(num).split('').reverse();


  console.log(parseInt(arr.join(''), 10));
  return parseInt(arr.join(''), 10);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
