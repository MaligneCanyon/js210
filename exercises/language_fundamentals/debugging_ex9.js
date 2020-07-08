var totalPages = 364;
var energy = 100;
var currentPage = 1; // move to global scope (or pass as arg to read())

function read() {
  // var currentPage = 1; // resets current page w/ each recursive call

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(); // called recursively
  } else {
    console.log('Done!');
  }
}

read();
