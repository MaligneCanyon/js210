function arrToString(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += String(arr[i]);
  }

  return str;
}

console.log(arrToString([1, 'a', 4]) === '1a4');
