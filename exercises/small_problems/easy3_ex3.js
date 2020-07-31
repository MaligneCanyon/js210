// inputs:
// - prompt for an integer (age)
// - prompt for an integer (retirement age)
// outputs:
// - print string
// reqs:
// - prompt for a current age
// - prompt for a desired retirement age
// - output a string showing the current year and retirement year
// - output a string showing how many years of work to go
// rules:
// - none
// struct:
// - numeric
// - string
// algo:
// - prompt for an age
// - prompt for a desired retirement age
// - obtain the current year
// - calc the number of years of work to go
// - calc the retirement year
// - output a string showing the current year and retirement year
// - output a string showing how many years of work to go

rlSync = require('readline-sync');

let age = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');
let year = (new Date()).getFullYear();
let yearsToGo = retirementAge - age;

console.log();
console.log(`It's ${year}. You will retire in ${yearsToGo + year}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);
