const MIN = 20;
const MAX = 200;
let age;

for (let i = 0; i < 20; i++) {
  age = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  console.log(`Teddy is ${age} years old!`);
}
