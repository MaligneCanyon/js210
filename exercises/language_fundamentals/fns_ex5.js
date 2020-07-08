function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// JS can't find myFar in the scope hierarchy, so it creates a global var
// on line2 myVar is assigned the string 'This is global'
// line6 logs the value of myVar, namely 'This is global'
