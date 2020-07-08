function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) { // if quantity was 0 ...
    quantity = 1; // ... quantity gets set to 1
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));      // 126.5


// alternate version
// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;

//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

// If any of the args are explicitly 0, the code will use the default values (which may or may not be 0).
console.log(processOrder(100, 0)); // 0 expected, 126.5 rtn'd
