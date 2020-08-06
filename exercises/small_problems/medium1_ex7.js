function fibonacci(n) {
  let arr = [1, 1];
  let fib;

  if (n < 1) return 0;
  if (n < 3) return 1;

  for (let ndx = 3; ndx <= n; ndx++) {
    fib = arr[0] + arr[1];
    arr = [arr[1], fib];
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
