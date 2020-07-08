function hello() {
  var a;
  a = 'hello';
  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);