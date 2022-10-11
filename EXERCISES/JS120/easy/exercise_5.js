// Object Factory
function createAnimal(name, age, legs, species, status) {
  return {
    name,
    age,
    legs,
    species,
    status,

    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
    }
  };
}

function createCat(name, age, status) {
  let cat = createAnimal(name, age, 4, "cat", status);
  
  cat.introduce = function() {
    return  `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  }

  return cat;
}

function createDog(name, age, status, master) {
  let dog = createAnimal(name, age, 4, "dog", status)
  dog.master = master;

  dog.greetMaster = function() {
    return `Hello ${this.master}! Woof, woof!`;
  }

  return dog;
}

// OLOO
const AnimalPrototype = {
  init(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    return this;
  },

  introduce() {
    return  `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

const CatPrototype = Object.create(AnimalPrototype);

CatPrototype.init = function(name, age, status) {
  return AnimalPrototype.init.call(this, name, age, 4, "cat", status);
}

CatPrototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
}

const DogPrototype = Object.create(AnimalPrototype);

DogPrototype.init = function(name, age, status, master) {
  AnimalPrototype.init.call(this, name, age, 4, "dog", status);
  this.master = master;
  return this;
}

DogPrototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
}


// Constructors/Prototypes
function AnimalConstructor(name, age, legs, species, status) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.species = species;
  this.status = status;
}

AnimalConstructor.prototype.introduce = function() {
  return  `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
}


function CatConstructor(name, age, status) {
  AnimalConstructor.call(this, name, age, 4, "cat", status);
}

CatConstructor.prototype = Object.create(AnimalConstructor.prototype);
CatConstructor.prototype.constructor = CatConstructor;

CatConstructor.prototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
}

function DogConstructor(name, age, status, master) {
  AnimalConstructor.call(this, name, age, 4, "dog", status);
  this.master = master;
}

DogConstructor.prototype = Object.create(AnimalConstructor.prototype);
DogConstructor.prototype.constructor = DogConstructor;

DogConstructor.prototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
}


// Classes
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "cat", status);
  } 

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let animalFactory = createAnimal("animal", 1, 1, "animal", "meh");
let catFactory = createCat('cat', 2, 'happy');
let dogFactory = createDog('dog', 3, 'happy', 'master');

console.log(animalFactory.introduce());
console.log(catFactory.introduce());
console.log(dogFactory.greetMaster());

let animalOLOO = Object.create(AnimalPrototype).init("animal", 4, 1, "animal", "meh");
let catOLOO = Object.create(CatPrototype).init('cat', 5, 'happy');
let dogOLOO = Object.create(DogPrototype).init('dog', 6, 'happy', 'master')

console.log(animalOLOO.introduce());
console.log(catOLOO.introduce());
console.log(dogOLOO.greetMaster());

let animalConstructor = new AnimalConstructor("animal", 7, 1, "animal", "meh");
let catConstructor = new CatConstructor('cat', 8, 'happy');
let dogConstructor = new DogConstructor('dog', 9, 'happy', 'master');

console.log(animalConstructor.introduce());
console.log(catConstructor.introduce());
console.log(dogConstructor.greetMaster());

let animalClass = new Animal("animal", 10, 1, "animal", "meh");
let catClass = new Cat('cat', 11, 'happy');
let dogClass = new Dog('dog', 12, 'happy', 'master');

console.log(animalClass.introduce());
console.log(catClass.introduce());
console.log(dogClass.greetMaster());