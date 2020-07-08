var foo = function foo() {
  return 'a named function expression assigned to a variable';
};
console.log(typeof foo); // function
console.log(foo); // [Function: foo] // the fn def (the fn itself)
console.log(foo()); // 'a named ...'
