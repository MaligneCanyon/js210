var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);

// fn bar() always rtns 4, so fn foo() always rtns 4
// so line13 logs 4

// var 'a' is scoped globally
// line13 calls foo()
//    'a' is set to 2 on line4
//    line10 calls bar()
//      'a' is set to 3 on line6
// so line14 logs 3
