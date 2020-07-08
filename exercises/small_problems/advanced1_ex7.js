// Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
// If the middle value is equal to 'Pizzeria', stop the search.
// If the middle value is less than 'Pizzeria':
//   Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
//   Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
// If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

function binarySearch(arr, searchItem) {
  var midPoint;
  var startNdx = 0;

  while (true) {
    midPoint = Math.floor(arr.length / 2);
    if (arr[midPoint] === searchItem) return startNdx + midPoint;
    if (arr.length <= 1) return -1;
    if (arr[midPoint] < searchItem) {
      arr = arr.slice(midPoint + 1);
      startNdx += midPoint + 1;
    } else arr = arr.slice(0, midPoint);
  }
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
