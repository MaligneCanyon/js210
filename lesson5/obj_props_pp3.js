function copyProperties(obj1, obj2) {
  for (prop in obj1) {
    obj2[prop] = obj1[prop]; // copies native and prototype properties
  }

  // return Object.keys(obj1).length; // only counts native properties
  return Object.keys(obj2).length; // counts both native and prototype properties
}

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

var obj1 = { a:1, b:2 };
var obj2 = Object.create(obj1);
var objX = {};
console.log(copyProperties(obj2, objX));  // 2
console.log(objX);                        // { a:1, b:2 }
