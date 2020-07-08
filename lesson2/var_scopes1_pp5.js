function hello() {
  var a = 'hello';
}

hello();
console.log(a);

// on line2, var 'a' is scoped locally
// on line6, JS can't resolve 'a', so it raises a ReferenceError
