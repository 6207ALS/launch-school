class Cat {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');
kitty.greeting();

/*
The constructor method of the "Cat" class takes a "name" argument, and sets it
to the instances' "name" property. The "Cat" class also has an instance method
"greeting," that accesses the instances' "name" property. On line 11, the
variable "kitty" is assigned an instance of the "Cat" class with a name property
of "Sophie." The instance's "greeting" method is invoked, which logs a greeting
and the name "Sophie."
*/