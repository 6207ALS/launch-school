// Object Factory
function createPet(name, age) {
  return {
    name,
    age,
  }
}

function createCat(name, age, pattern) {
  let cat = createPet(name, age);

  cat.pattern = pattern;
  cat.info = function() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.pattern} fur.`;
  }

  return cat;
}


// OLOO
const PetPrototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
  }
}

const CatPrototype = Object.create(PetPrototype);

CatPrototype.init = function(name, age, pattern) {
  PetPrototype.init.call(this, name, age);
  this.pattern = pattern;

  return this;
}

CatPrototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.pattern} fur.`;
}


// Constructors/Prototypes
function PetConstructor(name, age) {
  this.name = name;
  this.age = age;
}

function CatConstructor(name, age, pattern) {
  PetConstructor.call(this, name, age);
  this.pattern = pattern;
}

CatConstructor.prototype = Object.create(PetConstructor.prototype);
CatConstructor.prototype.constructor = CatConstructor;

CatConstructor.prototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.pattern} fur.`;
}


// Class
class PetClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class CatClass extends PetClass {
  constructor(name, age, pattern) {
    super(name, age);
    this.pattern = pattern;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.pattern} fur.`;
  }
}


let catFactory = createCat("Cat", 3, "black and white");
console.log(catFactory.info());

let catOLOO = Object.create(CatPrototype).init("Cat", 4, "orange");
console.log(catOLOO.info());

let catConstructor = new CatConstructor("Cat", 5, "blue");
console.log(catConstructor.info());

let catClass = new CatClass('Cat', 7, "white");
console.log(catClass.info());