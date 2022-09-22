class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');

/*
The constructor method of the "Cat" class takes a "name" argument, which is
assigned to the instance's "name" property (as shown on lines 2 to 3). The
instance's "name" property is then accessed to log a greeting to the console.

On line 8, the variable "kitty" is initialized with an instance of the "Cat"
class. A new "Cat" object is instantiated and invokes its constructor method, 
which logs "Hello! My name is Sophie!" to the console.
*/