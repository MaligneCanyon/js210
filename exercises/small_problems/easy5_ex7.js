function swapName(str) {
  // let [firstName, lastName] = str.split(' ');
  // return `${lastName}, ${firstName}`;

  // from the Solution ...
  return str.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
