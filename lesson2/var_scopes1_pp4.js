function hello() {
  a = 'hello';
}

hello();
console.log(a);

// on line2 JS can't find var 'a' in the scope hierarchy, so 'a' becomes a global var
// so line6 logs 'hello'
