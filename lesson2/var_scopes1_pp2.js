var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); //-> outer // testScope() hasn't been called yet
testScope(); //-> inner
console.log(a); //-> inner

// var 'a' is scoped globally (throughout the code)
