// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems: Promises and Async/Await


// Q1
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Launch School");
//   }, 2000);
// });

// promise.then(data => {
//   console.log(data);
// });


// // Q2
// promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error: Not Launch School");
//   }, 2000);
// });

// promise.catch(error => console.log(error));


const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

// Q3
/*
The console will log the following:
  - "I am NOT a Promise"
  - "I am a Promise"

The code will execute synchronously from top to bottom. First, the promise on 
line 1 is instantiated, executing its callback function as well. Next, on line 
5, the "then" method is called on the promise, defining what the promise should 
do when it settles. On line 6, the synchronous function "console.log" logs 
"I am NOT a Promise" to the console.

The synchronous function, console.log, first logs its argument to the console.
The promise, when instantiated, runs synchronously as well. It will execute the
code within the callback function and return a promise representing a certain
state. In this case, the promise will always resolve with a value of
"I am a Promise".  On line 5, the "then" method is called onto the promise 
asynchronously. Because all asynchronous functions execute after synchronous
functions, the "then" method logs "I am a Promise" AFTER the console.log on line
6.

*/


// Q4

/*
The console logs the following:
  - "foo"
  - "bar"
  - "qux"
  - "baz"

On line 1, the Promise constructor invokes its callback function, synchronously.
"foo" and "bar" are logged to the console while the "resolve" function 
invocation settles/resolves the Promise object.

On line 7, the "then" method invokes its callback function asynchronously. As
such, it will be pushed back until all other synchronous code has been executed.

On line 11, "qux" is logged to the console. Finally, the callback function of
the "then" method can be executed, logging "baz" to the console.
*/


// Q5
/*
The console logs the following:
  - "foo"
  - "bar"
  - "abc"
  - "qux"

On line 1, the Promise constructor invokes its callback function, synchronously.
"foo" and "bar" are logged to the console while the "reject" function invocation
settles/rejects the Promise object.

On line 7, the "catch" method invokes its callback function asynchronously. As
such, it will be pushed back until all other synchronous code has been executed.
The "catch" method is called instead of the "then" because the promise object 
was previously rejected. 

On line 11, "abc" is logged to the console. Finally, the callback function of
the "catch" method can be executed, logging "qux" to the console.
*/

// Q6
/*
The following is logged to the console:
  - 1
  - 3
  - 6
  - undefined

It should be noted that if a "then" method's handler function explicitly returns
a value, it instead returns a fulfilled Promise object whose value is the
explicitly returned value.

In turn, each "then" invocation is called by a new fulfilled Promise object with
a value.

The "finally" method invocation, however, behaves differently. Its handler
function does not take any arguments. As such, its "num" parameter (on line 15)
will always be undefined even if the calling Promise object has a value or not.
Thus, "undefined" is logged.
*/


// Q7
/*
The provided code logs "Got it!" to the console. It should be noted that
Promise objects can only be settled once. They can also never change from 
resolved to rejected or vice versa. As such, the first settling function called
in the handler function is the only valid function to settle the object.

In this case, the "resolve" function on line 2 is the first function to settle
the Promise object. Any subsequent attempts to settle the Promise object such
as lines 3 and 4 are ignored.

On line 7, the chain leads to the first "then" method invocation, which logs
the value of the resolved Promise object - "Got it!"
*/


// Q8
/*
The provided code logs 18 to the console. The asynchronous "test" function is 
invoked on line 15. Within the "test" function, the constants "a" and "b" are 
declared and initialized with the return value of the "after1s" function 
invocation. 
The "after1s" function returns a Promise object that, once settled after 1 
second, becomes resolved with the value of the "after1s" function's argument. 
In this case, constant "a" is initialized with the value of 2. After 1 second,
constant "b" is initialized with the value of 3. The "test" function returns a 
Promise object whose value is the product of constants "a", "b", and its 
argument: 18.
On line 15, the "then" method is called onto the returned Promise object and
logs the object's value, 18, to the console.
*/


// Q9 
/*
Like the previous problem, the provided code logs 18 to the console. According
to MDN Web Docs (as of 2023), the await operator returns the fulfillment value 
of the promise or thenable object that follows it. However, if the expression
is not thenable, the operator returns the expression's own value.

As such, the addition of "await" before the constants "a" and "b" do not have
any effect on the results. Their values remain as 2 and 3, respectively.

And, like the previous problem, the value is logged to the console about 
seconds after the execution of the program.
*/


// Q10
/*
The following is logged to the console:
  - 18
  - 12

The "18" is logged approximately two seconds after the execution of the program
whereas the "12" is logged after approximately four seconds.

The code is first executed parsed synchronously: executing lines 21 and 22.

Line 21 invokes an asynchronous function "test1," which returns a value after
about four seconds. The value is "then" logged to the console.

Similarly, line 22 invokes an asynchronous function "test2," which returns a
value after about two seconds. The value is also "then" logged to the console.
*/


// Q11
/*
The provided code logs the following to the console:
2
3
1

On lines 12 and 13, the functions "test1" and "test2" are invoked, respectively.

The function "test1" invokes the "testPromise" function, which asynchronously 
returns a resolved Promise with a value of 1. The "then" method is called on 
the Promise and logs the value to the console. However, "then" method is an 
asynchronous function that will execute once all synchronous code has been 
executed. As such, JavaScript will withhold logging the value immediately. 
On line 5, the "console.log" function logs "2" to the console.

The function "test2" is next on the call stack, and simply logs "3" to the
console. With all synchronous code being executed, all asynchronous events can
proceed. The "then" method, from function "test1", can now log its value to the
console.
*/


// Q12

/*
The provided code logs the following to the console:
A
B

The code first declares a "test" constant and initializes it with a resolved
Promise whose value is the string "A". Then, an IIFE (Immediately Invoked
Function Expression) is executed. The expression is an asynchronous arrow 
function with its body being a try/catch/finally expression. The try portion 
logs the value of "test" to the console. Because no error was thrown, the
expression moves on to the "finally" portion, which logs "B" to the console.
*/


// Q13
/*
The provided code logs the following to the console:
E
B

The code first declares a "test" constant and initializes it with a rejected
Promise whose error message is the string "A". Then, an IIFE (Immediately 
Invoked Function Expression) is executed. The expression is an asynchronous 
arrow  function with its body being a try/catch/finally expression. The try 
portion logs the value of "test" to the console. Because the "test" promise 
is rejected, the await operator expression throws the rejection, moving on 
to the "catch" portion, which logs "E" to the console. Then, the "finally"
portion is executed, logging "B" to the console.

*/
