// inputs:
// - strs (noun, verb, adjective, adverb)
// outputs:
// - str
// reqs:
// - prompt for input strs, create and output a phrase using the inputs
// rules:
// - none
// testcases:
// - as below
// struct:
// - str
// algo:
// - prompt for input strs
// - create a phase
// - log the phrase to the console

let noun = prompt('Enter a noun: ');
let verb = prompt('Enter a verb: ');
let adjective = prompt('Enter an adjective: ');
let adverb = prompt('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// Do you walk your blue dog quickly? That's hilarious!
