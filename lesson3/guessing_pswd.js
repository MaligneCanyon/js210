function guessingPswd() {
  let message = 'You have ';
  const PSWD = 'secret';
  const MAX_TRIES = 3;
  let guess;

  for (let i = 0; i < MAX_TRIES; i++) {
    guess = prompt('What is the password ?');
    console.log(guess, i + 1);
    if (guess === PSWD) {
      message += 'successfully logged in.';
      break;
    } else if (i === (MAX_TRIES - 1)) {
      message += 'been denied access.';
    }
  }
  console.log(message);
}

guessingPswd();

// - the trouble w/ running this script from an html file w/ a form is that it execs
// almost instantaneously, before you actually input anything into the form
// - how do you get the for loop to iterate only after entering something in the
// form ? pswd authentication should be done on the server side; it's there that the
// num of login attempts should be eval'd, not here in the browser HTML/JS code
