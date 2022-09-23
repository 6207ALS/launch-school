class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}

Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

/*
The Person, Cat, and Cheetah classes' prototype objects are assigned the "walk"
method using a mixin. The Object.assign method is used to assign the properties
of the "walkMixin" method into the classes' prototype objects. In turn,
all instances of the classes inherit the "walk" method. 

With this method, the objects' "name" property and "gait" method are accessed
to return a string unique to their class and names.
*/