const MIN = 20;
const MAX = 200;

for (let i = 0, age; i < 10; i++) {
  age = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  console.log(`Teddy is ${age} years old!`);
}
