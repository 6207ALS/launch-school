class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();

/*
  In the code above, the Cat class is declared with the 'genericGreeting' 
static method and the 'personalGreeting' instance method.
  Instance methods are methods that are defined within the class's prototype
object. These methods are typically invoked by instances of the class as their
prototypes are set to the class's prototype object. In turn, they can delegate
method access to the instance method through prototypal delegation. In this 
case, the 'kitty' object, an instance of the Cat class, is able to the
'personalGreeting' method, which logs an interpolated string containing the
instance's 'name' property.
  Static methods, on the other hand, are defined using the 'static' modifier
(in classes). In turn, the static method is defined directly on the class
itself, instead of the class's prototype object. The method can then be accessed 
and invoked by calling it from class. In this case, the 'genericGreeting'
static method is invoked from the Cat class, which logs a simple message to the
console.
  This code demonstrates the differences of static and instance methods,
specifically their syntax and how they are invoked.
*/