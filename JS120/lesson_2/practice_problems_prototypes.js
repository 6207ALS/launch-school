/*
Answers for JS120 - Lesson 2, Practice Problems: Functions, Objects, and 
Prototypes
*/

// Q1
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
The code above will output the number 2 to the console. On line 8, variable 
'baz' is declared and initialized with the return value of the Object.create() 
method. The method returns a new object with its [[prototype]] property
initialized to reference the object 'qux'. At this point, 'baz' is
an empty object with properties inherited from the object 'qux'. When the 'foo'
property is accessed, JavaScript searches for the property within the object
as well as its prototype chain. The expression 'baz.foo + qux.foo' returns 2.
This code demonstrates property look-up within an object's prototype chain. 
*/


// Q2
qux = { foo: 1 };
baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
The code above logs 3 to the console. In contrast to Question 1, the code 
contains property assignment to the 'baz' object. On line 26, the 'baz' object
is assigned a 'foo' property with a value of 2. When assigning properties to 
objects in JavaScript, the property is treated as the called object's "own"
property. Object 'baz' has its own 'foo' property and so does object 'qux',
each with differing values. Thus, the expression 'baz.foo + qux.foo' on line 28
returns 3. 
*/


// Q3
qux = { foo: 1 };
baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
The code above logs 4 to the console. When variable 'baz' is declared and 
intialized on line 43, it is assigned a reference to a new object with its 
prototype being object 'qux'. More specifically, the 'baz' object's prototype 
property references the 'qux' object — which means any changes made to object 
'qux' (such as the property reassignment on line 44) will reflect on object 
'baz'. Thus, both objects return a value of 2 when accessing the 'foo' property
on line 46. 
*/


// Q4
function assignProperty(object, property, value) {
  while (object !== null) {
    if (object.hasOwnProperty(property)) {
      object[property] = value;
      break;
    } 

    object = Object.getPrototypeOf(object);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

/*
The function 'assignProperty()' searches the prototype chain of an object for a 
given property and assigns it a new value. 
*/


// Q5
let bar = {a: 1, b: 2};
let foo = Object.create(bar);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

/*
The two snippets of code above do not always produce the same output. In code
snippet #1, the for-in loop will iterate over all enumerable properties, 
including those within its prototype chains. In code snippet #2, the 
Object.keys() method, however, returns an array of the argument's own 
properties. Thus, the two snippets of code will output different results if 
object 'foo' is an object with multiple prototypes, each with enumerable
properties. 
*/


// Q6
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj));

/*
One can create an object with no prototype by using the Object.create() method
with null passed as the argument. The method returns a new object with its
[[prototype]] property assigned to null. To check if an object has a prototype,
the Object.getPrototypeOf() method can be used to return an object's prototype
object. If used on object 'obj' in the code above, the return value is null. 
*/