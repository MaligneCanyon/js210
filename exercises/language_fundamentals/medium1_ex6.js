function debugIt() {
  var status = 'debugging'; // inits 'status' to pt to str 'debugging'
  function logger() { // hoisted above the 'var status' def (w/i debugIt())
    console.log(status); // logs the value of 'status'
  }

  // logger is invoked; 'status' is scoped w/i the outer-scoped debugIt() fn;
  // its value is accessible w/i the inner-scoped logger() fn
  logger();
}

debugIt();
