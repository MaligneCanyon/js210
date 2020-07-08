function randomMinMax(min, max) {
  let temp;

  if (min === max) return min;

  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }

  // Math.floor(Math.random()*101) // 0<=int<=100
  return Math.floor(Math.random()*(max - min + 1)) + min; // min<=int<=max
}

// gen 1000 random nums in range min..max
let min = 30;
let max = 21;
let result = {};

for (i = 0; i < 1000; i ++) {
  rand = randomMinMax(min, max);
  if (result[rand]) result[rand]++;
  else result[rand] = 1;
}
console.log(result);
console.log(`${Object.values(result).reduce((accum, elem) => accum + elem, 0)} samples`);
