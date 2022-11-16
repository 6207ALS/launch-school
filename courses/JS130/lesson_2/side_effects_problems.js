/*
(JS130) Lesson 2 - Side Effects and Pure Functions: Practice Problems
*/


// Q1
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*
The side effects from the code above are mutation of an object from a non-local
variable and output to the console. Within the 'foo' function, the 'pop' method
is called on the array argument. Specifically, the 'qux' object, a global 
variable, is passed to the 'foo' function as an argument. In turn, it's last
element is removed from the array; it is mutated. 

Afterwards, an interpolated string that includes the removed element is logged
to the console. Any kind of output operation performed within a function such
as 'console.log' is considered a side effect of the function.
*/


// Q2
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

function sum(a, b) {
  a + b;
}

function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  return a + b + Math.random();
}

function sum(a, b) {
  return 3.1415;
}

/*
The second, third, and last versions of the 'sum' function are considered
pure functions. The first 'sum' function utilizes the 'console.log' method. Any
output operation performed within a function is considered to be a side effect.
Pure functions cannot have side effects.

The fourth 'sum' function utilizes the 'Math.random()' expression. The 
expression accesses the random number generator from the system, which is
considered a side effect.

The remaining functions are pure functions; they do not have side effects and
have return values that depend solely on their arguments.
*/