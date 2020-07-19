// function oddElementsOf(arr) {
//   let newArr = [];

//   for (let i = 1; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

function oddElementsOf(arr) {
  return arr.filter((elem, ndx) => ndx % 2);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits));    // returns [8, 16, 42]
