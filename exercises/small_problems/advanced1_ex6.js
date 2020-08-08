function merge(arr1, arr2) {
  var newArr = [];

  arr1 = arr1.slice();
  arr2 = arr2.slice();

  while (arr1.length || arr2.length) {
    newArr.push((!arr1.length || arr2[0] <= arr1[0]) ? arr2.shift() : arr1.shift());
  }

  return newArr;
}

// [9, 5, 7, 1] ->
// [[9, 5], [7, 1]] ->
// [[[9], [5]], [[7], [1]]] ->
// [[5, 9], [1, 7]] ->
// [1, 5, 7, 9]

// inputs:
// - arr (unsorted)
// outputs:
// - arr (sorted)
// reqs:
// - sort an arr containing one type of data (all nums or all strs)
// - recursive sorting
// struct:
// - arr (to hold subarrs)
// algo:
// - rtn the arr if the arr only contains zero or one elem; otherwise,
// - split the arr into two subarrs
// - call mergeSort on each of the two subarrs
// - after the arr has been fully broken down,
//   call merge to sort and recombine the subarr elems
// - rtn the recombined subarrs

function mergeSort(arr) {
  let splitNdx = Math.floor(arr.length / 2);
  let subarr1;
  let subarr2;

  // console.log(`arr === [${arr}]`);
  if (arr.length <= 1) return arr;

  subarr1 = arr.slice(0, splitNdx);
  subarr2 = arr.slice(splitNdx);
  // console.log(subarr1, subarr2);

  subarr1 = mergeSort(subarr1);
  subarr2 = mergeSort(subarr2);

  // console.log('pre merge ', subarr1, subarr2);
  return merge(subarr1, subarr2);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
