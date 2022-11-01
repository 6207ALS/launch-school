// Object Factories
function createPet(animal, name) {
  return {
    animal,
    name,
    info() {
      return `a ${this.animal} named ${this.name}`;
    },
  };
}

function createOwner(name) {
  return {
    name,
    pets: [],
    numberOfPets() {
      return this.pets.length;
    }
  }
}

function createShelter() {
  return {
    register: {},

    adopt(adopter, adoptee) {
      if (!this.register.hasOwnProperty(adopter.name)) {
        this.register[adopter.name] = [];
      }

      this.register[adopter.name].push(adoptee);
      adopter.pets.push(adoptee);
    },

    printAdoptions() {
      for (let adopter in this.register) {
        console.log(`${adopter} has adopted the following pets:`);
        for (let adoptee of this.register[adopter]) {
          console.log(adoptee.info());
        }
        console.log();
      }
    }
  }
}


// OLOO
const PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  info() {
    return `a ${this.animal} named ${this.name}`;
  },
};

const OwnerPrototype = {
  init(name) {
    this.name = name;
    this.pets = [];
    return this;
  },

  numberOfPets() {
    return this.pets.length;
  },
};

const ShelterPrototype = {
  init() {
    this.register = {};
    return this;
  },

  adopt(adopter, adoptee) {
    if (!this.register.hasOwnProperty(adopter.name)) {
      this.register[adopter.name] = [];
    }

    this.register[adopter.name].push(adoptee);
    adopter.pets.push(adoptee);
  },

  printAdoptions() {
    for (let adopter in this.register) {
      console.log(`${adopter} has adopted the following pets:`);
      for (let adoptee of this.register[adopter]) {
        console.log(adoptee.info());
      }
      console.log();
    }
  },
}

// Constructor/Prototype
function PetCon(animal, name) {
  this.animal = animal;
  this.name = name;
}

PetCon.prototype.info = function() {
  return `a ${this.animal} named ${this.name}`;
}

function OwnerCon(name) {
  this.name = name;
  this.pets = [];
}

OwnerCon.prototype.numberOfPets = function() {
  return this.pets.length;
}

function ShelterCon() {
  this.register = {};
}

ShelterCon.prototype.adopt = function(adopter, adoptee) {
  if (!this.register.hasOwnProperty(adopter.name)) {
    this.register[adopter.name] = [];
  }

  this.register[adopter.name].push(adoptee);
  adopter.pets.push(adoptee);
}

ShelterCon.prototype.printAdoptions = function() {
  for (let adopter in this.register) {
    console.log(`${adopter} has adopted the following pets:`);
    for (let adoptee of this.register[adopter]) {
      console.log(adoptee.info());
    }
    console.log();
  }
}


// Class
class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.register = {};
  }

  adopt(adopter, adoptee) {
    if (!this.register.hasOwnProperty(adopter.name)) {
      this.register[adopter.name] = [];
    }

    this.register[adopter.name].push(adoptee);
    adopter.pets.push(adoptee);
  }

  printAdoptions() {
    for (let adopter in this.register) {
      console.log(`${adopter} has adopted the following pets:`);
      for (let adoptee of this.register[adopter]) {
        console.log(adoptee.info());
      }
      console.log();
    }
  }
}

// OBJECT FACTORY TEST
console.log('Object Factory:')
let butterscotch = createPet('cat', 'Butterscotch');
let pudding      = createPet('cat', 'Pudding');
let darwin       = createPet('bearded dragon', 'Darwin');
let kennedy      = createPet('dog', 'Kennedy');
let sweetie      = createPet('parakeet', 'Sweetie Pie');
let molly        = createPet('dog', 'Molly');
let chester      = createPet('fish', 'Chester');

let phanson = createOwner('P Hanson');
let bholmes = createOwner('B Holmes');

let shelter = createShelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.\n`);

// OLOO TEST
console.log("OLOO:");
butterscotch = Object.create(PetPrototype).init('cat', 'Butterscotch');
pudding      = Object.create(PetPrototype).init('cat', 'Pudding');
darwin       = Object.create(PetPrototype).init('bearded dragon', 'Darwin');
kennedy      = Object.create(PetPrototype).init('dog', 'Kennedy');
sweetie      = Object.create(PetPrototype).init('parakeet', 'Sweetie Pie');
molly        = Object.create(PetPrototype).init('dog', 'Molly');
chester      = Object.create(PetPrototype).init('fish', 'Chester');

phanson = Object.create(OwnerPrototype).init('P Hanson');
bholmes = Object.create(OwnerPrototype).init('B Holmes');

shelter = Object.create(ShelterPrototype).init();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.\n`);

// CONSTRUCTORS TEST
console.log("Constructors/Prototype:");
butterscotch = new PetCon('cat', 'Butterscotch');
pudding      = new PetCon('cat', 'Pudding');
darwin       = new PetCon('bearded dragon', 'Darwin');
kennedy      = new PetCon('dog', 'Kennedy');
sweetie      = new PetCon('parakeet', 'Sweetie Pie');
molly        = new PetCon('dog', 'Molly');
chester      = new PetCon('fish', 'Chester');

phanson = new OwnerCon('P Hanson');
bholmes = new OwnerCon('B Holmes');

shelter = new ShelterCon();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.\n`);

// CLASSES TEST
console.log("Classes:");
butterscotch = new Pet('cat', 'Butterscotch');
pudding      = new Pet('cat', 'Pudding');
darwin       = new Pet('bearded dragon', 'Darwin');
kennedy      = new Pet('dog', 'Kennedy');
sweetie      = new Pet('parakeet', 'Sweetie Pie');
molly        = new Pet('dog', 'Molly');
chester      = new Pet('fish', 'Chester');

phanson = new Owner('P Hanson');
bholmes = new Owner('B Holmes');

shelter = new Shelter();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.\n`);