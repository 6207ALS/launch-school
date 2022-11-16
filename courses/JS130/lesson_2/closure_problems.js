/*
(JS130) Lesson 2 - Practice Problems: Closures
Note: outputs may vary due to duplicated code or variables with the same name
*/

// Q1
let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

// let incrementCounter = makeCounter();
console.log(incrementCounter()); // increments counter by 1, returns counter (1)
// logs 1
console.log(incrementCounter()); // increments counter by 1, returns counter (2)
// logs 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // increments counter by 1, returns counter (3)
// logs 3
console.log(incrementCounter()); // increments counter by 1, returns counter (4)
// logs 4


// Q2
function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();

// increments local variable by 1, logs 1
console.log(incrementCounter()); 

// increments local variable by 1, logs 1
console.log(incrementCounter());

incrementCounter = makeCounter();

// increments local variable by 1, logs 1
console.log(incrementCounter());

// increments local variable by 1, logs 1
console.log(incrementCounter());


// Q3
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

incrementCounter = makeCounter();

// increments counter variable from closure, logs 1
console.log(incrementCounter());

// increments counter variable from closure, logs 2
console.log(incrementCounter());

// reassigns incrementCounter to new 'makeCounter' function, clean slate.
incrementCounter = makeCounter();

// increments counter variable from closure, logs 1
console.log(incrementCounter());

// increments counter variable from closure, logs 2
console.log(incrementCounter());


// Q4
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

// incrementCounter1 is given its own function, with its own closure
// thus, it has its own copy of the counter variable
let incrementCounter1 = makeCounter();

// incrementCounter2 is given its own function, with its own closure
// thus, it has its own copy of the counter variable
let incrementCounter2 = makeCounter();

// increments local counter variable, logs 1
console.log(incrementCounter1());

// increments local counter variable, logs 2
console.log(incrementCounter1());

// increments local counter variable, logs 1
console.log(incrementCounter2());

// increments local counter variable, logs 2
console.log(incrementCounter2());


// Q5
function makeMultipleLister(number) {
  return function() {
    for (let i = number; i < 100; i += number) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(17);
lister();


Q6
let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10


// Q7
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // returns function, prod = 2
let result = bar(3); // multiplies prod by 3, returns value of prod, 6
result += bar(4); // mutliplies prod by 4 (24), adds to value of result, 30
result += bar(5); // mutliples prod by 5 (120), adds to value of result, 150
console.log(result); // logs 150

/*
The code above logs 150 to the console. First, 'bar' is declared and initialized
to the returned function of the foo function. By passing in 2, the returned
function's closure has a 'prod' variable with a value of 2.

Second, the 'result' variable is declared and initialized to the 'bar' function
invocation. By passing in 3 to the 'bar' function, the function's 'prod' 
variable is reassigned to its value multiplied by 3 (which is 6). The 'result'
variable is then reassigned to the value of 'prod', 6.

Next, the 'bar' function is invoked with 4 as the argument. By passing in 4 to 
the 'bar' function, the function's 'prod' variable is reassigned to its value 
multiplied by 4 (which is 24). The value of the 'prod' variable is then added to 
the 'result' variable, which becomes 30.

Again, the 'bar' function is invoked, but with 5 as the argument. The function's
'prod' variable is reassigned to its value multiplied by 5 (which is 120). The
value of 'prod' is then added to the 'result' variable, which becomes 150.

Finally, the value of 'result' is logged to the console, 150.
*/


// Q8
function later(func, funcArg) {
  return function() {
    func(funcArg);
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


// Q9
function later2(func, funcArg) {
  return function(funcArg2) {
    func(funcArg, funcArg2);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


// Q10
function bindFunction() {
  "use strict";

  function bind(obj, func) {
    return function() {
      func.call(obj);
    }
  }

  let obj = {};
  let boundFunc = bind(obj, function() {
    this.foo = "bar";
  });
  
  boundFunc();
  console.log(obj); // { foo: 'bar' }
}

bindFunction();