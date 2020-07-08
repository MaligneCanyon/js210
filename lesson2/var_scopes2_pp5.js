var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);

// var 'a' is globally scoped on line1
// line18 calls checkScope()
// var 'a' is functionally scoped on line4 and line6
// checkScope() rtns the rtn value of fn nested(), which rtns the rtn value
//   of the fn superNested(), which is the str 'superNested'
// so line18 logs the value 'superNested'
// line19 logs 'global', the value of globally scoped var 'a'
