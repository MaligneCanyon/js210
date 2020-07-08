function greetings(arr, obj) {
  console.log(`Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj['occupation']} around.`);
} // uses alt formats for the obj properties

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
// Hello, John Q Doe! Nice to have a Master Plumber around.
