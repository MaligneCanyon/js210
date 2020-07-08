// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// invoiceTotal(20, 30, 40, 50);          // works as expected
// invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

function invoiceTotal(...arr) {
// function invoiceTotal() {
  // let arr = Array.prototype.slice.call(arguments);
  // let arr = Array.from(arguments);
  return arr.reduce((accum, elem) => accum + elem, 0);;
}

console.log(invoiceTotal(20, 30, 40, 50)); // 140
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); // 220
