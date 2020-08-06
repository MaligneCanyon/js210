// inputs:
// - int (n, the width of the triangle)
// outputs:
// - logged strs
// reqs:
// - log a series of n strs composed of spaces and asterisks, forming a right-angled triangle
// rules:
// - where i in [1..n]
//   - each str composed of
//     - (n - i) spaces
//     - i asterisks
// struct:
// - str
// algo:
// - for each i from 1 to n
//   - build a str using the above rules
//   - log the str

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
