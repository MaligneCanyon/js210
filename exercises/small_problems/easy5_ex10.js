function reverseWords(str) {
  let arr = str.split(' ');

  return arr.map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
