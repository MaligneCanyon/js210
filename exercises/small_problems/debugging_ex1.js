// var ladder = ''

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(function(word) {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail


// the code should have semicolons after each expression;
// in particular, the lack of a semicolon after the 1st line is causing the
// arr def to be misinterpreted

// from the Solution ...
// "Semicolons should always terminate a statement. With no semicolon to separate them,
// JavaScript sometimes sees the next statement as part of the former statement, which
// leads to undesired behavior."

var ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(function(word) {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
})

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail
