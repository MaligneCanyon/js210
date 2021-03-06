var todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  var tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(todos[0] + ' complete!');

    // delete arr[ndx] changes the value of the spec'd elem to undefined,
    // but does not remove it from the arr; use arr.shift() instead

    // delete todos[0];
    todos.shift();
    // todos.splice(0, 1); // also works

    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(tasksComplete + ' tasks completed; ' + todos.length + ' remaining.');
  }
}

function displayTaskList() {
  var i;

  console.log('ToDo list (' + todos.length + ' tasks):')
  console.log('---------------------');

  for (i = 0; i < todos.length; i++) {
    console.log('-- ' + todos[i]);
  }
}

// Utilizing our task manager
addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
