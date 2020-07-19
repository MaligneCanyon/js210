let arr = [,,];
console.log(arr);
console.log(arr.length); // 2 // one comma for each missing elem

arr = [0];
arr[7] = 7;
console.log(arr);        // [ 0, <6 empty items>, 7 ]
console.log(arr.length); // 8
