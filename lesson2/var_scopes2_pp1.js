function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// the declaration for 'a' is hoisted (but not the initialization)
// 'a' is implicitly assigned the value 'undefined'
// since the condition on line2 evals to false, line3 never executes
// so line6 log "undefined"
