var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);              // false -- expected: true
console.log(person.name === otherPerson.name);    // true

// can't compare objs directly
// objs are only equal if they are the same obj

otherPerson = person;
console.log(person === otherPerson);              // true
