var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456'; // sets a var named prop2 to '456'
myObject['prop2'] = '456'; // sets obj k:v pair as prop2:'456'
myObject[prop2] = '678'; // sets obj k:v pair as '456':'678'

console.log(myObject[prop2]); // '678' // JS looks for value of var prop2 and uses it as key
console.log(myObject.prop2); // '478' // JS looks for key named 'prop2'
console.log(myObject); // { prop1: '123', prop2: '456', 'prop 3': '345', '456': '678'}
