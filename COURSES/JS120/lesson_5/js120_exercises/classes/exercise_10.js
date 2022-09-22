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
The Cat class has a static method called "genericGreeting" and an instance
method called "personalGreeting." The static method "genericGreeting" logs a
simple, general statement to the console. It is invoked by accessing the Cat
class itself.

The instance method "personalGreeting" can be invoked on an instance of the
Cat class. The method accesses the instance's "name" property and uses it as
part of the message logged to the console. 
*/