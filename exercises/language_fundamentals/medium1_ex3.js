// var row;
// var i;
// var j;

// function padLeft(number) {
//   var stringNumber = String(number);

//   return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber; // not wide enough for 10*10
// }

// for (i = 1; i < 10; i += 1) { // 1..9 only
//   row = '';
//   for (j = 1; j <= 10; j += 1) {
//     row += padLeft(i * j) + ' ';
//   }

//   console.log(row + '\n');
// }

let row;
const TABLE = 3;
const MAX_WIDTH = String(TABLE * TABLE).length;

function padLeft(number) {
  let stringNumber = String(number);

  return ' '.repeat(MAX_WIDTH - stringNumber.length) + stringNumber;
}

for (let i = 1; i <= TABLE; i += 1) {
  row = '';
  for (let j = 1; j <= TABLE; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}
