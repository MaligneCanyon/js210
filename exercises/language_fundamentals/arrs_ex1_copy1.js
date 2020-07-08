var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();             // mutation
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];          // re-assignment
console.log(myOtherArray); // [1, 2, 3]

myArray.pop();
console.log(myArray);      // [1]
console.log(myOtherArray); // [1, 2, 3] -- not mutated
