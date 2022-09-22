/*
Answers for JS120 - Lesson 4, Subtyping with Constructors and Prototypes
Practice Problem
*/

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};


// Case 1
let hello = new Hello();
hello.hi();

/*
The code for Case 1 will log "Hello!" to the console. On line 14, the Hello
constructor's prototype object is reassigned to an object whose [[Prototype]]
property refers to the Greeting constructor's prototype object. In turn, all
instances created by the Hello constructor inherit methods from both the Hello
constructor's prototype object and the Greeting constructor's prototype object.
On line 31, JavaScript finds the "hi" method from the Greeting constructor's
prototype object and logs "Hello!"
*/


// Case 2
hello = new Hello();
hello.bye();

/*
The code for Case 2 will result in an error. As stated on line 14 and 22, the
Hello and Goodbye constructors' prototype objects are reassigned to refer to 
Greeting's prototype object. Essentially, instances from Hello and Goodbye 
inherit instance methods from Greeting's prototype object, but neither inherit 
methods from each other. Thus, variable 'hello', an instance of Hello, cannot 
invoke the 'bye' method, an instance method from Goodbye.
*/


// Case 3
hello = new Hello();
hello.greet();

/*
The code for Case 3 will log undefined to the console. As explained previously,
variable 'hello' is an instance of Hello, which inherits instance methods from 
both Hello and Greeting. Thus, variable 'hello' is able to invoke the 'greet'
method. However, no argument is passed into the method and undefined is logged
to the console.
*/


// Case 4
hello = new Hello();
hello.greet('Goodbye');

/*
The code for Case 4 will log "Goodbye" to the console. The variable 'hello' is
an instance of Hello type. It inherits instance methods from both Hello's
prototype object and Greeting's prototype object. Thus, it can invoke the
'greet' method. With an argument of string 'Goodbye', the greet method logs
'Greet' to the console.
*/


// Case 5
Hello.hi();

/*
The code for Case 5 will result in an error. The expression 'Hello.hi()' is an
attempt to invoke a static method on the Hello constructor. That is, it attempts
to find and execute a method that is defined directly on the Hello constructor
function. However, the 'hi' method is defined on Hello's prototype object.
To clarify, the 'hi' method can be found in the object that Hello's 'prototype'
property (Hello.prototype) refers to. With the 'hi' method not defined in the
Hello constructor function itself, the expression will result in an error.
*/