function placeABet(guess) {
  // extra parentheses are not req'd around a fn declaration
  // "In order to be a function declaration, a statement must begin with the function keyword"
  // (function generateRandomInt() {
  //   return Math.floor(Math.random() * 25) + 1;
  // });
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  var winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// ReferenceError: generateRandomInt is not defined
alert(placeABet(userGuess));
