let int;
let operation;
let result;

while (true) {
  while (true) {
    int = parseInt(prompt('Please enter an integer greater than 0:'), 10); // 5
    if (isNaN(int) || int <= 0) {
      alert('Enter a positive integer please ...');
    } else break;
  }

  operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.'); // s

  if (operation === 's') {
    operation = 'sum';
    result = 0;
    for (let i = 1; i <= int; i++) result += i;
  } else if (operation === 'p') {
    operation = 'product';
    result = 1;
    for (let i = 1; i <= int; i++) result *= i;
  } else {
    alert('Goodbye!');
    break;
  }

  console.log(`The ${operation} of the integers between 1 and ${int} is ${result}.`);
}

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
// The product of the integers between 1 and 6 is 720.


// node version:
// let rlSync = require('readline-sync');
// let int;
// let q;
// let arr = [];
// let result;

// do {
//   int = Number(rlSync.question('Please enter an integer greater than 0: '));
// } while (!Number.isInteger(int));

// do {
//   q = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// } while (q !== 's' && q !== 'p');

// for (let i = 1; i <= int; i++) arr.push(i);

// if (q === 's') result = arr.reduce((accum, elem) => accum + elem, 0);
// else result = arr.reduce((accum, elem) => accum * elem, 1);

// console.log(`the ${q === 's' ? 'sum' : 'product'} of the integers between 1 and ${int} is ${result}.`);
