var name = 'Bob';
var saveName = name;
name = 'Alice'; // reassignment; 'name' pts to a new str obj
console.log(name, saveName); // 'Alice', 'Bob'

var name = 'Bob';
var saveName = name;
name.toUpperCase(); // rtns a new str (which is unused)
console.log(name, saveName); // 'Bob', 'Bob'
