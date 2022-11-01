const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Dog.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

/*
In the code above, methods defined in the "swimMixin" object are copied into
both the Dog and Fish's prototype objects. In turn, all instances of the classes
inherit the "swim" method.
*/