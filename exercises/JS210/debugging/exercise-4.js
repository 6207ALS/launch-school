// JS210 Exercises | Debugging
// Exercise 4 - Task List

const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift()
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

/*
The error in the code was the use of the "delete" operator to remove elements
in the "todos" array. The delete operator will delete the array's "0" property,
as demonstrated on line 20, but will not reindex the array or update its length.
Instead, the property "0" in "todos" appears as if it's undefined. As such,
using "delete" with an array can lead to unexpected results and should generally 
be avoided.

As shown above, the solution was to replace line 20 with "todos.shift()." The
Array.prototype.shift() method removes the first element of the Array instance
AND reindexing the array.
*/