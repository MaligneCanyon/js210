// function reverse(input) {
//   let isArr = Array.isArray(input);
//   let output = isArr ? [] : '';

//   for (let i = input.length - 1, j = 0; i >= 0; i--, j++) {
//     if (isArr) output[j] = input[i];
//     else output += input[i];
//     // console.log(i, input[i], j, output[j]);
//   }

//   return output;
// }


// based on Daniel Lew's solution ...
function reverse(input) {
  let output = [];

  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i]);
  }

  return Array.isArray(input) ? output : output.join('');
}


console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
