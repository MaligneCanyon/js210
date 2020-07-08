var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3 // array[3.4] is a pseudo elem and doesn't contribute to the value of 'length'
console.log(Object.keys(array).length); // 4 // Object keys rtns all the native properties of an obj

array[-2] = 'Watermelon';
console.log(array.length); // 3 // array[-2] is also a pseudo elem
console.log(Object.keys(array).length); // 5


// from the Solution ...
console.log(array);  // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]
console.log(Object.keys(array));      // ["0", "1", "2", "3.4", "-2"]
// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes
// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon
