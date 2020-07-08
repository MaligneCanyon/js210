function madlibs(template) {
  function randomArrElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // 0 <= int <= (arr.length - 1)
  }

  const WORDS = {
    $adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    $noun1: ['fox', 'dog', 'cat'],
    $noun2: ['head', 'leg', 'tail'],
    $verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    $adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  return template.map(word => {
    return Object.keys(WORDS).includes(word) ? randomArrElem(WORDS[word]) : word;
  }).join(' ');
}

let template1 = [
  'The', '$adjective', 'brown', '$noun1', '$adverb',
  '$verb', 'the', '$adjective', 'yellow',
  '$noun1', '\b,', 'who', '$adverb', 'licks', 'his',
  '$noun2', 'and', 'looks', 'around', '\b.'
];

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily" // adj n adv
// "licks" the "sleepy" yellow        // v adj
// "dog", who "lazily" "licks" his    // n adv v
// "tail" and looks around.           // n

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

let template2 = [
  'The', '$noun1', '$verb', 'the', '$noun1', '\b\'s', '$noun2', '\b.'
]

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail". // n v n n

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
