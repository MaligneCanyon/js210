// inputs:
// - prompt for an integer (age)
// - prompt for an integer (retirement age)
// outputs:
// - print string
// reqs:
// - prompt for an age
// - prompt for a desired retirement age
// - output a sting showing the current year and retirement year
// - output a sting showing how many years of work to go
// rules:
// - none
// struct:
// - numeric
// - string
// algo:
// - prompt for an age
// - prompt for a desired retirement age
// - calc the number of years of work to go
// - obtain the current year
// - calc the retirement year
// - output a sting showing the current year and retirement year
// - output a sting showing how many years of work to go

let age = prompt('What is your age?');
let retirement_age = prompt('At what age would you like to retire?');
let years_to_go = retirement_age - age;
let year = (new Date()).getFullYear();
retirement_year = year + years_to_go;

console.log(`It's ${year}. You will retire in ${retirement_year}.`);
console.log(`You have only ${years_to_go} years of work to go!`);
