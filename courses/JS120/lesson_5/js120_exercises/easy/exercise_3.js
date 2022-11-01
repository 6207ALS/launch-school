class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

/*
On line 10, the Object.create method is used to create an object, whose
[[Prototype]] refers to the Cat class's prototype object. In turn, the object
inherits instance methods defined in the Cat class.

A) The 'instanceof' operator tests if the "prototype" property of the 
constructor/class on the right of the operator (Cat) appears anywhere on the 
prototype chain of the object to the left of the operator. In other words,
the operator searches for Cat.prototype in the "fakeCat" object's prototype
chain. The "fakeCat" object's prototype chain appears like so:

fakeCat ---> Cat.prototype ---> Object.prototype ---> null


B) The "name" property of "fakeCat" returns 'undefined' because the 'name' 
property cannot be found on the object's prototype chain. The "name" property
is a property found on the Cat class itself. However, when accessing the 'name'
property on "fakeCat," JavaScript searches for the property on the object's
prototype chain, not on the Cat class itself. Nowhere in the objects of the
prototype chain above will you directly find the "name" property.


C) The fakeCat can invoke the "speak" method because it inherits the method
from Cat.prototype. However, it returns 'undefined says meowwww.' because the
object does not have a "name" property. On the other hand, instances of the Cat
class (that the constructor method has invoked on) do have the "name" property.
*/