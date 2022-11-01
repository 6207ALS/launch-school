/*
Answers for JS120 - Lesson 2, Practice Problems: Implicit and Explicit Function 
Execution Contexts
*/

// Q1
function func() {
  return this;
}

let context = func();

console.log(context);

/*
The code above will output the global object. The 'func()' functions's implicit
context is the global object when invocated regularly. On line 11, the variable
'context' is declared and initialized with the return value of the func() 
function. At this point, the 'context' variable is assigned the reference to 
'this', the global object, which is logged to the console. 
*/


// Q2
let obj = {
  func: function() {
    return this;
  },
};

context = obj.func();

console.log(context);

/*
The code above will output the 'obj' object to the console. The implicit context
of a regular method invocation is the object in which it is called in. On line 
31, variable 'context' is assigned the return value of the 'obj.func()' method. 
The method returns 'this', or the execution context, which is the 'obj' object
itself. The 'obj' object is logged to the console.
*/


// Q3
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*
The code above will output "Hello from the global scope!" and "Hello from the
function scope!" On line 45, the 'message' property is added to the global 
object with the value of "Hello from the global scope!" On line 51, the 
deliverMessage() function is invoked with an implicit execution context of the
global object. It logs the value of the 'message' property from the global 
object. 

On line 53, the 'foo' object is declared and initialized with an object. The
object has a 'message' property with the value of "Hello from the function 
scope." The 'deliverMessage' property is added to the 'foo' object with the 
value of the 'deliverMessage' function. Finally on line 59, the 'foo' object's 
deliverMessage method is invoked with the 'foo' object as the execution context.
It logs the value of the object's 'message' property. 
*/


// Q4

/*
The 'call' and 'apply' methods can be used to not only invoke functions, but 
also to explicitly set the execution context for the function. 
*/


// Q5
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo);

/*
The code above will return the number 3. The 'bar' object's 'add' method is 
invoked with the 'call' method. We pass the 'foo' object as the method's 
explicit execution context. Thus, it will return the sum of the 'foo' object's
'a' and 'b' property values (1 + 2).
*/