function fibonacci(n) {
  var i = 3;
  var fib;
  var fibOld = 1;
  var fibNew = 1;

  if (n < 1) return 0;
  if (n < 3) return 1;

  for (; i <= n; i++) {
    fib = fibOld + fibNew;
    fibOld = fibNew;
    fibNew = fib;
  }

  return fib;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050
