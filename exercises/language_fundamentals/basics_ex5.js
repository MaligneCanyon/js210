// Enter the first number: 23
// Enter the second number: 17

// 23 + 17 = 40
// 23 - 17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4105003956066297e+23


// var number1 = prompt('Enter the first number:');
// var number2 = prompt('Enter the second number:');

// for String operands, the + op is used for concatonation;
// other ops implicitly coerce the String operands to Number;
// use explicit coercion for clarity

var number1 = Number(prompt('Enter the first number:'));
var number2 = Number(prompt('Enter the second number:'));

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// to be really explicit, use
console.log(String(number1) + ' + ' + String(number2) + ' = ' + String(number1 + number2));
