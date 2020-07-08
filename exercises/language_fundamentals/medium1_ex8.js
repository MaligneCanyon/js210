function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2); // undefined * undefined === NaN
  return result;
}

function total(numbers) {
  // var sum; // never init'd
  var sum = 0;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // undefined += ...
  }

  // sum; // NaN // also missing 'return' statement, so fn rtns undefined
  return sum;
}

console.log(productOfSums([1, 2, 3], [4, 5, 6])); // 90 expected
