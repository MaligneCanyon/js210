// function swapName(str) {
//   let arr = str.split(' ');

//   return `${arr[1]}, ${arr[0]}`;
// }

// from the Solution ...
function swapName(str) {
  return str.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
