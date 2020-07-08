function sequence(int) {
  let arr = [];

  for (let i = int; i > 0; i--) arr.unshift(i);

  console.log(arr);
  return arr;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
