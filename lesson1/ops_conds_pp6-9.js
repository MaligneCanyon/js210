let apples = 3;
let bananas = "3";
let areEqual;
let eitherOr;

// pp6
if (apples === bananas) { // same value and type
  console.log('strict equality');
} else {
  if (apples == bananas) {
    console.log('loose equality');
  } else {
    console.log('strict inequality');
  }
}

// pp7
bananas = 3;
areEqual = (apples === bananas);
console.log(areEqual); //=> true

// pp8
bananas = undefined;
eitherOr = (apples || bananas);
console.log(eitherOr); //=> 3 (not used in a conditional expr, so not eval'd to T or F)

// pp9
bananas = 1;
eitherOr = (apples || bananas);
console.log(eitherOr); //=> 3
eitherOr = (bananas || apples);
console.log(eitherOr); //=> 1
