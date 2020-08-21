// inputs:
// - str
// outputs:
// - multiple strs (logged)
// reqs:
// - take a str
// - log the str w/i a box
// rules:
// - box has 5 lines, composed as follows
//   - 1st and 5th lines: plus sign, str.length + 2 minus signs, plus sign
//   - 2nd and 4th lines: pipe, str.length + 2 spaces, pipe
//   - 3rd line: pipe, space, input str, space, pipe
// struct:
// - str
// algo:
// - build the first 3 lines
// - log the first 3 lines
// - log the 2nd line (again)
// - log the 1st line (again)

function logInBox(str) {
  let line1 = '+' + '-'.repeat(str.length + 2) + '+';
  let line2 = '|' + ' '.repeat(str.length + 2) + '|';
  let line3 = '| ' + str + ' |';

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line2);
  console.log(line1);
}

logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
