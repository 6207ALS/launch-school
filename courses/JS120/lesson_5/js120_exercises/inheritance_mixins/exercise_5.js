class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");

console.log(kitty.greet());
console.log(kitty.walk());

/*
In the code above, a mixin is used to add a "walk" method to Cat class's 
prototype object. In turn, all instances of the Cat class inherit the "walk"
method. 

To 'mixin' the "walk" method into the Cat class's prototype object, an object
is created with the "walk" method. The Object.assign method is then used to
copy the object's properties into the Cat class's prototype object.
*/