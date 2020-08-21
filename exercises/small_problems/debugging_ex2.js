var RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach(function (reserved) {
//     // console.log(name, reserved, name === reserved);
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

// The 'return true' statement is the rtn statement of the forEach cb fn;
// it is not a rtn statement for the isReserved fn.
// Also, w/ forEach, any rtn value is ignored and all elems are iterated
// regardless.

// refactored ...
function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
