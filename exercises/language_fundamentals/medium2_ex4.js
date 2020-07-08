function makeDoubler(caller) {
  return function(number) { // rtn a fn def'n (an anonymous fn expr)
    console.log('This function was called by ' + caller + '.');
    return number + number;
  };
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.
