// inputs:
// - str (the ops to perform)
// outputs:
// - int (the result of the op)
// reqs:
// - implement a stack using push and pop methods
//   - use a 'register' to rep the current value
//   - for a given op, pop most recently pushed value from the stack, perform the op on that and the
//     register value, and store the result in the register
// - all ops are integer based
// - take a str as an arg (spec'ing the operands and the ops to perform)
// - init the reg to 0 and the stack to []
// rules:
// - none
// struct:
// - arr (to hold list of cmds)
// algo:
// - init a reg (int) to 0
// - init a stack (arr) of ints to []
// - split the cmd str into an arr of cmds
// - for each cmd
//   - perform the spec'd op

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

function minilang(str) {
  var stack = [];
  var reg = 0;
  var cmds;
  var cmd;

  // console.log(str);
  cmds = str.split(' ');
  cmds.forEach(cmd => {
    // console.log(`cmd === ${cmd}`);
    switch(cmd) {
      case 'PUSH':
        stack.push(reg);
        break;
      case 'ADD':
        reg += stack.pop();
        break;
      case 'SUB':
        reg -= stack.pop();
        break;
      case 'MULT':
        reg *= stack.pop();
        break;
      case 'DIV':
        reg = Math.floor(reg / stack.pop());
        break;
      case 'MOD':
        reg = Math.floor(reg % stack.pop());
        break;
      case 'POP':
        reg = stack.pop();
        break;
      case 'PRINT':
        console.log(reg);
        break;
      default:
        reg = parseInt(cmd, 10); // integer
    }
  });
  // console.log();
}

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)
