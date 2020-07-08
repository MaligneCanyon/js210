var myArray = [5, 5];
myArray[-1] = 5; // pseudo elem
myArray[-2] = 5; // pseudo elem

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) { // you can iterate over consecutive pseudo elem indices ...
    sum += array[i];
  }

  return sum / array.length; // ... but pseudo elems don't contrib to arr length
}

console.log(average(myArray)); // 10; (5 + 5 + 5 + 5) / 2
