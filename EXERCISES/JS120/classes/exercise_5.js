class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');

/* 
  On line 8, the 'kitty' variable is declared and initialized to a new instance
of the 'Cat' class. The 'new' operator, followed by an invocation of the Cat
class, is used to instantiate the instance. 
  Several steps are taken when using the said expression. First, a new object is
created whose prototype is set to the Cat class's prototye object. That is, the 
object referenced by Cat.prototype. Then, the implicit execution context for the 
Cat class's constructor method is set to the newly created object. Next, 
the Cat class's constructor method is invoked, which assigns the object a 'name' 
propery with the 'name' argument as its value. It then logs a message containing
the object's name property. Finally, the object is returned  (unless another 
object is explicitly returned). The 'kitty' variable is initialized with the 
newly created 'Cat' instance.
*/