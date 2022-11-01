class Cat {
  constructor() {
    console.log("I'm a cat!");
  }
}

let kitty = new Cat();

/*
  On line 7, the 'kitty' variable is declared and initialized to a new instance
of the 'Cat' class. The 'new' operator, followed by an invocation of the Cat
class, is used to instantiate the instance. 
  Several steps are taken when using the said expression. First, a new object is 
created whose prototype is set to the Cat class's prototye object. That is, the 
object referenced by Cat.prototype. Then, the implicit execution context for 
the Cat class's constructor method is set to the newly created object. Next, 
the Cat class's constructor method is invoked, which logs "I'm a cat!" to the
console. Finally, the object is returned.
*/