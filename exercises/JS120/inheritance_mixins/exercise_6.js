// Mixin for swim method
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

// Object Factory and Mixin
function createFish(name) {
  let fish = {
    name,
  };

  Object.assign(fish, swimMixin);

  return fish;
} 

function createDog(name) {
  return {
    name,
  };
}

function createMaltese(name) {
  let maltese = createDog(name);
  Object.assign(maltese, swimMixin);

  return maltese;
}

// OLOO and Mixin
const FishPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
}

Object.assign(FishPrototype, swimMixin);

const DogPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
}

const MaltesePrototype = Object.create(DogPrototype);
Object.assign(MaltesePrototype, swimMixin);

// Constructor/Prototype and Mixin
function FishC(name) {
  this.name = name;
}

Object.assign(FishC.prototype, swimMixin);

function DogC(name) {
  this.name = name;
}

function MalteseC(name) {
  DogC.call(this, name);
}

MalteseC.prototype = Object.create(DogC.prototype);
MalteseC.prototype.constructor = DogC;

Object.assign(MalteseC.prototype, swimMixin);


// Class and Mixin
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

class Maltese extends Dog {}

Object.assign(Fish.prototype, swimMixin);
Object.assign(Maltese.prototype, swimMixin);



let dog1 = createMaltese("Dug");
let fish1 = createFish("Shaq");

let dog2 = Object.create(MaltesePrototype).init("Joe");
let fish2 = Object.create(FishPrototype).init("Shark");

console.log(dog2.swim());
console.log(fish2.swim());

let dog3 = new MalteseC("Bud");
let fish3 = new FishC("Dory");

console.log(dog3.swim());
console.log(fish3.swim());

let dog4 = new Maltese("Buddy");
let fish4 = new Fish("Nemo");

console.log(dog4.swim());
console.log(fish4.swim());