let today = Date();
console.log(today); // Sun May 10 2020 18:52:32 GMT-0600 (Mountain Daylight Time)
console.log(typeof(today));

today = new Date();
console.log(today); // 2020-05-11T00:52:32.833Z // GMT
console.log(typeof(today));

let yesterDate = new Date('January 1, 2000');
console.log(yesterDate); // 2000-01-01T07:00:00.000Z
console.log(typeof(yesterDate));
