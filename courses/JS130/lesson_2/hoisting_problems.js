/*
(JS130) Lesson 2 - Practice Problems: Hoisting and the var Statement
*/


// Q1
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

/*
The code above will log "Bye" to the console. Because of hoisting, the 'foo'
function declaration will be placed to the top of the program. The 'foo' 
variable declaration will be discarded, and instead becomes a reassignment
expression for the 'foo' variable. Essentially, the 'foo' function declaration
is reassigned to a new function that logs "Bye" to the console. This code
demonstrates how function declarations and var declarations with the same name
interact when being hoisted.
*/


// Q2
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

/*
The code above will log undefined, "Hello", "Bye", and 2 to the console. Before 
the program is executed, the creation phase of the JavaScript engine will hoist
the 'foo' variable to the top of the program, declaring and initializing it with 
a value of 'undefined'. 

Then on the first iteration of the for-loop, the value of 'foo' is logged to the 
console. At this point, the value of 'foo' is undefined. Afterwards, the 'foo' 
variable is reassigned to the string "Hello" (given that the value of 'index' 
is 0). The value of 'index' is incremented to 1.

On the second iteration of the for-loop, the value of 'foo' is again logged to 
the console, which now has a value of "Hello". 'foo' is then reassigned to the 
string "Bye". The value of 'index' is incremented to 2.

Because the value of 'index' is no longer less than 2, the for-loop ends. The
value of 'foo' is logged to the console which, at this point, is the string
"Bye". The value of 'index' is logged to the console, which is the number 2.

(Note, the output may vary because of the code from Question 1)
*/


// Q3
bar();

function bar() {
  console.log("foo!");
};

/*
The code above allows the 'bar' function to be invoked before it is declared.
The 'bar' function declaration was previously a function expression, assigned
to a variable declared with the 'var' statement. With function expressions,
the variable declaration is hoisted to the top with a value of undefined (for
variables declared with 'var'). Essentially, the 'bar' variable was invoked
despite being assigned the value 'undefined' instead of a function.

In the code above, the 'bar' function expression was refactored as a function
declaration. With function declarations, JavaScript will hoist their name and
body to the top of the program. This allows for such functions to be invoked
before they are declared.
*/


// // Q4
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

////////////////////

function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;
bar = 82;

foo();

/*
The second code snippet shown above represents the first code snippet hoisted.
Between function declarations and variable declarations, functions are hoisted
above. Within the function, the 'bar' variable (declared with the 'var' 
statement) is hoisted to the top of the function scope, initialized with
undefined. The 'bar' variable is then reassigned to the expression 'bar - 42'.
Because the value of 'bar' is undefined, the expression evaluates to
'undefined - 42', or NaN. The value of 'bar' is logged to the console. 
Afterwards, a global 'bar' variable is declared, later reassigned to the value
of 82.  This code demonstrates how function declarations and variable 
declarations are hoisted.
*/


// Q5

// code using only 'let' statements
function foo(condition) {
  let bar;

  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
/*
undefined
3.1415
42
*/

foo(false);
/*
undefined
0.5772
2.7183
undefined
42
*/


// Q6

// Original Code
Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
Solution

// Hoisted Code
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);