// inputs:
// - array (nums to be sorted)
// outputs:
// - none (we will mutate the input array)
// reqs:
// - make multiple passes thru the input array
// - for each array element, if the next element is less than the current one, swap the elements
// - count the number of swaps
// - stop when a complete pass is done w/o swapping
// - mutate the input array as-we-go
// rules:
// - stop if number of swap events === 0 for a given pass
// struct:
// - array
// algo:
// - do
//   - initialize a swap flag to false
//     - for each element up to array.length - 2
//       - if current element > next element
//         - swap current element, next element
//         - set the swap flag to true
//     - stop unless the swap flag === true

// Note: after every pass, all elements after the last swap are sorted, and do not need to be checked again

function bubbleSort(arr) {
  var swapped;
  var i;
  var temp;

  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  } while (true);
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
