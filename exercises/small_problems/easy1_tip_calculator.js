let bill = parseFloat(prompt('What is the bill?'), 10); // 200
let tipPercent = parseFloat(prompt('What is the tip percentage?'), 10); // 15
let tip = bill * tipPercent / 100;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`); // 30.00
console.log(`The total is $${total.toFixed(2)}`); // 230.00
