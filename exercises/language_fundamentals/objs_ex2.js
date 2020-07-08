var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName); // rtns the fn defs sep'd by a ' '

var a = function () { };
console.log(a);         // [Function: a]
console.log(String(a)); // function () { }
