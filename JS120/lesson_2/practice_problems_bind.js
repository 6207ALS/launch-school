/*
Answers for JS120 - Lesson 2, Practice Problems: Hard Binding Functions with 
Contexts
*/

// Q1

/*
The 'bind' method can be used to permanently bind a function to a particular
execution context. It is to be noted that the function is not modified in any
way. Rather, it is invoked with an explicit execution context.
*/


// Q2
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/*
The code above will not log anything to the console. On line 24, the 'bind'
method is called on the 'foo' function, returning a new function. Unlike the
'call' or 'apply' methods, the 'bind' method does not immediately invoke the
function; it returns a new function, which can invoke the original function 
with a permanent, set execution context. 
*/


// Q3
obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());

/*
The code above will first log NaN and then 5 to the console. On line 45, the 
'bar' variable is declared and initialized with the expression 'foo.bind(obj)'. 
At this point, 'bar' references a function that invokes the 'foo' function with 
its context set to the 'obj' object. On line 47, the foo() function is invoked 
with its implicit context set to the global object. On line 48, the 'bar' 
function is invoked with its explicit context set to the 'obj' object.
*/


// Q4

let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

/*
The code above logs "JavaScript makes sense!" to the console. On line 74, the 
'bar' variable is assigned a function that invokes 'foo' function with its
context as the "positivity" object. On line 76, the 'negativity' object is 
assigned the 'logMessage' property with the value of the 'bar' variable. 
Finally the 'logMessage' property is invoked, which invokes the 'bar' function. 
As stated in line 74, the 'bar' variable will always invoke the 'foo' function
with an explicit context of the 'positivity' object.
*/


// Q5
obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

bar = foo.bind(obj);

bar.call(otherObj);

/*
The code above will log "Amazebulous!" to the console. On line 103, the 'bar' 
variable is assigned the expression 'foo.bind(obj)'. When 'bar' is invoked, 
the 'foo' function is invoked with its execution context always being the
'obj' object. Thus, when 'bar' is invoked on line 105, the execution context
passed in the 'call' method is disregarded. Because of the 'bind' method on line
103, invoking 'bar' will always set its bind to the 'obj' object. 
*/