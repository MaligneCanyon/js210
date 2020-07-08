function wordCount(str) {
  let arr = str.split(' ');
  let obj = {};

  arr.forEach(word => {
    if (obj[word]) obj[word]++;
    else obj[word] = 1;
  });

  return obj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
