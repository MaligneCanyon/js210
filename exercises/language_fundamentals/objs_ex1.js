var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); // 'd'
// console.log(myObject[a]); // should use myObject['a']
console.log(myObject['a']); // 'name'
console.log(myObject.a); // 'name'
