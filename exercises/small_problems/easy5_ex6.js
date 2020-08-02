function sequence(num) {
  let arr = [];

  // for (let i = 1; i <= num; i++) arr.push(i);
  // for (let i = num; i > 0; i--) arr.unshift(i);
  while (num -->   0) arr.unshift(num + 1);
  return arr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
