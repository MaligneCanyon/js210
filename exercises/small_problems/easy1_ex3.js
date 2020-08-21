let length = parseFloat(prompt('Enter the length of the room in meters:'), 10);
let width = parseFloat(prompt('Enter the width of the room in meters:'), 10);
let area = length * width;
const SQ_FEET_PER_SQ_METER = 10.7639;

console.log(`The area of the room is ${area} square meters ` +
  `(${(area * SQ_FEET_PER_SQ_METER).toFixed(2)} square feet).`);
