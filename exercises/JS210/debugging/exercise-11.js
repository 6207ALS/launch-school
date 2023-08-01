// JS210 Exercises | Debugging
// Exercise 11 - Weekday Classes

/*
The following code demonstrates the Pomodoro technique. Although it seems to 
work in principle, it never prints the minute count from line 11. What is wrong?
*/

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  var minutes = 0;
  pomodoro();
}

pomodoro();

/*
The code above never prints the minute count from line 11 because of variable
hoisting and name shadowing. On the global scope (on line 4), the variable
"minutes" is declared and initialized with the number 0. Typically, this
variable would be accessible from the scope of the "pomodoro" function
declaration. However, on line 43, a local variable named "minutes" is also 
declared, shadowing the global "minutes" variable. 

The local variable "minutes" is accessible at any point within the function
declaration, including before its initialization and declaration. However, its 
value is "undefined" until the variable's line of declaration is executed. Thus, 
on line 9, the comparison (minutes < 25) is equivalent to (undefined < 25), 
which evaluates to a falsey value. As such, the while-loop on line 9 will never 
execute.
*/