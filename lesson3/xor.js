// inputs:
// - 2 operands of unknown type
// outputs:
// - boolean
// reqs:
// - rtn true if one operands is truthy and the other falsy; otherwise, rtn false
// rules:
// - none
// struct:
// - boolean
// algo:
// - if op1 is truthy and op2 is falsy
//   rtn T
// - else if op2 is truthy and op1 is falsy
//   rtn T
// - else
//   rtn F

// function isXor(operand1, operand2) {
//   if ((operand1 && !operand2) || (operand2 && !operand1)) return true;
//   else return false;
// }

// from the solution:
function isXor(operand1, operand2) {
  return !!((operand1 && !operand2) || (operand2 && !operand1)); // coerce to boolean
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false

console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
