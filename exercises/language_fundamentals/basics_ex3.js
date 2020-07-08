if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// 5 unique execution paths
condition1 === true && condition2 === true
condition1 === true && condition2 === false
condition1 === false && condition4 === true && condition5 === true
condition1 === false && condition4 === true && condition5 === false
condition1 === false && condition4 === false
