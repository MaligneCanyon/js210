var fibber = {}; // save any calc'd fib values

// function fibonacci(n) {
//   if (n < 3) return 1;
//   if (!fibber[String(n - 2)]) {
//     fibber[String(n - 2)] = fibonacci(n - 2);
//     // console.log(fibber);
//   }
//   return fibonacci(n - 1) + fibber[String(n - 2)];
// }

function fibonacci(n) {
  if (n < 3) return 1;
  if (!fibber[String(n)]) {
    fibber[String(n)] = fibonacci(n - 1) + fibonacci(n - 2);
    console.log(fibber);
  }
  return fibber[String(n)];
}

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// console.log(fibonacci(50));      // 12586269025
