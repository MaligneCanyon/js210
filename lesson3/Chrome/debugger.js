function hello(name) {
  console.log(`Hello ${name}`);
}

function greetEveryone() {
  let names = ['Darleen', 'Sam', 'Prasad', 'Ming'];

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    debugger; // sets a breakpt
    hello(name);
    hi(name); // raises an exception
  }
}

greetEveryone();
