// We love to visit museums if they are about science or computers. We're undecided when it comes
// to modern art, but we consider going if there is a museum about Andy Warhol (because we do like
// him) or if it's a modern art museum conveniently located in nearby Amsterdam. All other museums
// we'd rather skip.

function wantToVisit(museum, city) {
  // return museum.includes('Computer')
  //     || museum.includes('Science')
  //     && !(museum.includes('Modern')
  //       && museum.includes('Art')
  //       && museum.includes('Andy Warhol')
  //       || city === 'Amsterdam');
  return museum.includes('Computer') ||
    museum.includes('Science') ||
    museum.includes('Andy Warhol') ||
    (city === 'Amsterdam' && museum.includes('Modern') && museum.includes('Art'));
}

// Tests (should all print 'true')
console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);

console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === true);
