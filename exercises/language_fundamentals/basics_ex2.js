var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}


// line 7: //=> 'Hello'
// line 11: // nothing
// line 15: //=> 'World' // [] is truthy
// line 19: //=> '!'
