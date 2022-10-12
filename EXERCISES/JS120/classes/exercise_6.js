class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();

/*
  In the code above, the Cat class is declared with the 'greet' method. The
'greet' method, which is defined outside of the constructor method, is an
instance method of the Cat class. That is, the method is defined in the Cat
class's prototype object. Instances of the Cat class inherit this method as
their prototypes are set to the class's prototype obejct. 
  On line 11, the 'kitty' variable is declared and initialized with a new
instance of the Cat class. The new instance, when instantiated, is assigned
a 'name' property with a value of the 'name' argument. 
  On line 12, the 'greet' method is called from the 'kitty' object using method
invocation syntax, and sets the function's implicit execution context to the
'kitty' object. The 'greet' method logs a string interpolated message that
accesses the execution context's 'name' property. In this case, the 'kitty'
object has a 'name' property with a value of "Sophie", which becomes part of the
logged message.
*/