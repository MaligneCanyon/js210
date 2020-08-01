function countOccurrences(arr) {
  let obj = {};

  arr.forEach(elem => {
    if (obj[elem]) obj[elem]++;
    else obj[elem] = 1;
  });

  for (key in obj) console.log(`${key} => ${obj[key]}`);
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
