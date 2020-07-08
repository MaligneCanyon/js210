// UNHOISTED
// =========

// one
console.log(a);
var a = 123;
var b = 456;


// two
console.log(hello());
function hello() {
  return 'hello world';
}


// three
console.log(hello());
var hello = function () {
  return 'hello world';
};


// four
bar();
var foo = 'hello';
function bar() {
  console.log(foo);
}


// five
bar();
var bar = 'hello';
function bar() {
  console.log('world');
}


// six
var bar = 'hello';
bar();
function bar() {
  console.log('world');
}


// HOISTED
// =======

// one
var a;
var b;
console.log(a); // logs `undefined`
a = 123;
b = 456;


// two
function hello() {
  return 'hello world';
}
console.log(hello()); // logs "hello world"


// three
var hello;
console.log(hello()); // raises "Uncaught TypeError: hello is not a function"
hello = function () {
  return 'hello world';
};


// four
function bar() {
  console.log(foo);
}
var foo;
bar(); // logs undefined
foo = 'hello';


// five
function bar() {
  console.log('world');
}
// var bar; // redundant declaration, ignored
bar(); // logs "world"
bar = 'hello';


// six
function bar() {
  console.log('world');
}
// var bar; // redundant declaration, ignored
bar = 'hello';
bar(); // raises "Uncaught TypeError: bar is not a function"
