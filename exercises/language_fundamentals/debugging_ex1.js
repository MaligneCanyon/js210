function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  // words[idx]; // must use a 'return' statement to rtn this
  return words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  // var declaration should occur at the begin of the fn
  var name;
  var greeting;

  for (i = 0; i < names.length; i++) {
    // var name = names[i];
    // var greeting = randomGreeting; // must append parentheses to fn call
    name = names[i];
    greeting = randomGreeting();

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
