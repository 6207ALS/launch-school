/*
function Person() {
}
Person.prototype.greeting = function(text) {
  console.log(text);
}

function Shouter() {
  Person.call(this);
}
Shouter.prototype = Object.create(Person.prototype)
Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
}
*/

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

/*
The Person and Shouter constructor functions have been refactored to use the
"class" keyword instead.
  - instead of directly accessing the constructor functions' 'prototype' 
    property to define instance methods, the methods can be defined within the
    class declaration

  - instead of manually reassigning the subclass's prototype object to inherit
    from the superclass's prototype object, the "extends" keyword does this 
    automatically

  - the Shouter subclass overrides the inherited "greeting" method with its own
    custom "greeting" method
      
      - the custom "greeting" method invokes the overridden method using "super"
        as the handle. It passes its own argument to the "super" function as 
        well. 
        
      - Within a class's body, the reference of super can be either 
        the superclass's constructor itself, or the superclass's prototype
        object, depending on whether the execution context is instance creation 
        or class initialization.

          - In this case, the reference of super is the superclass's
          prototype object because it is within a method invocation of the
          parent class's protototype object.
*/