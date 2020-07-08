
var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i); // i is logged here when its value is 0, but it is not incremented
  } else {
    i += 1;
  }
}
// result will be an infinite loop that repeatedly logs 0
