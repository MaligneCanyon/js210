// inputs:
// - arr (to be sorted)
// outputs:
// - none (we will mutate the input arr)
// reqs:
// - make multiple passes thru the input arr
// - for each arr elem, if the prev elem is less than the current one, swap the elems
// - count the num of swaps
// - stop when a complete pass is done w/o swapping
// rules:
// - stop if num of swap events === 0 for a given pass
// struct:
// - arr
// algo:
// - do
//   - init a swap flag to false
//     - for each elem from ndx 1 upto arr.length - 1
//       - if prev elem > current elem
//         - swap prev and current elems
//         - set the swap flag to true
//     - continue while the swap flag === true

// Note: after each pass, all elems after the last swap are sorted, and do not need to be re-checked

function bubbleSort(arr) {
  let swapped;
  let temp;

  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
