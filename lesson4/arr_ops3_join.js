function join(arr, sep) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += String(arr[i]);
    if (i < arr.length - 1) str += sep;
  }

  return str;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
