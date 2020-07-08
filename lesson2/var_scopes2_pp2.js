function hello() {
  a = 'hello'; // global var
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// the var 'a' dec is hoisted to the top of fn hello()
// var 'a' is init'd to 'hello' on line2
// so line3 logs 'hello'
// line5 never evals to T, so line6 never execs (which is actually irrelevant)
// line11 raises a ReferenceError since var 'a' is only scoped w/i fn hello()
