// pp1
let apples = 3;
let bananas = 5;
if (apples == bananas) console.log('1. loose equality');

// pp2
bananas = "3";
if (apples == bananas) console.log('2. loose equality');

if (apples === bananas) // pp3 // same value and type
  console.log('3. strict equality');
else if (apples == bananas) console.log('5. loose equality'); // pp5
else console.log('4. strict inequality'); // pp4
