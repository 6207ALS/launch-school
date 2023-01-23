/*
(JS130) Lesson 5: Asynchronous Programming Practice Problems 
*/

// Problems from "Assignment: Asynchronous Execution with setTimeout"

// Q1 
function delayLog() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}

delayLog();

/*
Output:

1  // 1 second later
2  // 1 second later (2 seconds after start)
3  // 1 second later (3 seconds after start)
4  // etc...
5
6
7
8
9
10

In the code above, the first call to 'setTimeout' sets the delay to one second
(1000 ms). Each subsequent invocation increases that delay period by an
additional second. However, the function expression itself (lines 3 - 5)
executes at intervals of one second rather than increasingly longer periods.
This behavior occurs since the for-loop in 'delayLog' runs to completion long
before the callback gets called for the first time - almost a full second on
most machines. To get the next output a second after that, we must wait two
seconds, and so on.
*/


// Q2
{
  function delayLog() {
    for (var delay = 1; delay <= 10; delay += 1) {
      setTimeout(function() {
        console.log(delay)
      }, delay * 1000);
    }
  }
  
  delayLog();
}

/*
Output:
11  // 1 second later
11  // 1 second later (2 seconds after start)
11  // 1 second later (3 seconds after start)
11  // etc...
11
11
11
11
11
11

In the code above, the only value that is logged to the console is 11, for a
total of 10 times. With 'var' variables, the variable is declared within the
function's scope. So, the loop uses the same 'delay' variable with each
iteration. And due to closure, each callback invocation sees the current value
of the 'delay' variable. Since the callback doesn't get called until long after
the loop finishes (as explained in question 1), every invocation refers to the
same value of 'delay', e.g., 11. 

The 'let' keyword, on the other hand, has block scope. Each iteration forms a
closure with a different variable. Thus, each callback's closure encloses a
different 'delay' variable. 
*/


// Q3
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);

/*
Output:

Once
upon
a
time

The numbers shown to the right of the code above indicate the sequence in which
each lines of code will execute. First, the code is run like sequential code,
executing each function invocation from top to bottom (1 - 4). Then, the
callback functions provided for each 'setTimout' function is invoked depending
on the function's delay. The higher the number (representing millisecond), the
longer the delay.
*/


// Q4
setTimeout(function() {     // 1
  setTimeout(function() {
    q();                    // 10
  }, 15);

  d();                      // 6

  setTimeout(function() {
    n();                    // 8
  }, 5);                    

  z();                      // 7
}, 10);

setTimeout(function() {     // 2
  s();                      // 9
}, 20);

setTimeout(function() {     // 3
  f();                      // 5
});

g();                        // 4

/*
Run sequence: g(), f(), d(), z(), n(), s(), q()

The run sequence for the code above is indicated by the numbers. 
First, the code runs like sequential code, executing function invocations from
top to bottom (1 - 4). Of the four function invocations, g() is invoked first. 
Next, the f() function is invoked, despite having a delay of 0 milliseconds. 
This is because the callback function is placed on a queue and scheduled to 
execute after all currently-executing code are completed; not immediately. 
Then, the lines code within the first setTimeout (1) are executed. The functions
d() and z() are invoked, followed by n(). 
Function q(), however, is invoked after function s(). This is due to the length
of their delays. Function q() has a delay period (from the beginning of the
program) of 35 milliseconds, whereas function s() has a delay period of 20
milliseconds. Thus, function s() is invoked first.
*/


// Q5
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

/*
The 'afterNSeconds' function above takes two arguments: a callback and a time 
duration in seconds. It waits for the indicated period, then invokes the 
callback function.

The function simply invokes the 'setTimeout' function and passes in its callback
function, along with the time converted to milliseconds.
*/


// Problems from "Assignment: Repeating Execution with setInterval"


//Q1
function startCounting() {
  let count = 1;
  setInterval(function() {
    console.log(count);
    count++;
  }, 1000);
}

startCounting();

/*
The startCounting function shown above calls the setInterval function to 
repeatedly call a function at an interval. Specifically, the function logs an
increment variable every one second.
*/


// Q2
function startCounting() {
  let count = 1;
  let counterId = setInterval(function() {
    console.log(count);
    count++;
  }, 1000);

  return counterId;
}

function stopCounting(id) {
  clearInterval(id);
}

let counterId = startCounting();
stopCounting(counterId);

/*
The startCounting function from the previous problem was refactored in order
to stop its 'setInterval' function. Specifically, the 'setInterval' function's
return value is assigned to a variable, which then becomes the return value
of the 'startCounting' function. In turn, the return value (an identifier) can
be passed into the 'clearInterval' function, to stop the repeating callback
function.
*/