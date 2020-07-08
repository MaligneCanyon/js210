var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray; // originally

// alt 1
var myOtherArray = myArray.slice();

// alt 2
// var myOtherArray = [];
// for (let i = 0; i < myArray.length; i++) {
//   // myOtherArray.push(myArray[i]); // this works ...
//   // myOtherArray[myOtherArray.length] = myArray[i]; // this works too ...
//   myOtherArray[i] = myArray[i]; // ... but this is simpler
// }

// alt3
// var myOtherArray = myArray.map(elem => elem);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
