function doubleConsonants(str) {
  let newStr = '';
  let lowStr = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if ('bcdfghjklmnpqrstvwxz'.includes(lowStr[i])) newStr += str[i];
  }

  console.log(newStr);
  return newStr;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
