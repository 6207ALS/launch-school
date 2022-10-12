const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  },
}

// Object Factory
function createCat(name) {
  let cat = {
    name,
    greet() {
      return `Hello! My name is ${this.name}`;
    },
  }

  Object.assign(cat, walkMixin);

  return cat;
}

// OLOO and Mixin
const CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
  
  greet() {
    return `Hello! My name is ${this.name}!`;
  },
}

Object.assign(CatPrototype, walkMixin);

// Constructor/Prototype and Mixin
function CatC(name) {
  this.name = name;
}

CatC.prototype.greet = function() {
  return `Hello! My name is ${this.name}!`;
}

Object.assign(CatC.prototype, walkMixin);

// Class and Mixin
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let kittyFactory = createCat("Jimmy");
console.log(kittyFactory.greet());
console.log(kittyFactory.walk());

let kittyOLOO = Object.create(CatPrototype).init("Sam");
console.log(kittyOLOO.greet());
console.log(kittyOLOO.walk());

let kittyConstructor = new CatC("Joe");
console.log(kittyConstructor.greet());
console.log(kittyConstructor.walk());

let kittyClass = new Cat("Sophie");
console.log(kittyClass.greet());
console.log(kittyClass.walk());