class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  toString() {
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

  adoptPet(adoptee) {
    this.pets.push(adoptee);
  }
}

class Shelter {
  constructor() {
    this.register = {};
  }

  adopt(adopter, adoptee) {
    this.registerPet(adopter, adoptee);
    adopter.adoptPet(adoptee)
  }

  registerPet(adopter, adoptee) {
    if (!this.register.hasOwnProperty(adopter.name)) {
      this.register[adopter.name] = [];
    }

    this.register[adopter.name].push(adoptee);
  }

  printAdoptions() {
    for (let adopter in this.register) {
      console.log(`${adopter} has adopted the following pets:`);
      for (let adoptee of this.register[adopter]) {
        console.log(`${adoptee}`);
      }
      console.log();
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();

console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
The Pet class, when instantiated, returns an object with a "name" and "animal"
property. 
  - It contains the "toString" instance method that returns a string of
    the object's information (useful for Shelter's "printAdoption" method)

The Owner class, when instantiated, returns an object with a "name" and "pets"
property.
  - The "pets" property references an array of the Owner's pets (Pet instances)

  - It contains the "numberOfPets" instance method that returns the number of
    "pets" in the said array
  
  - It contains the "adoptPet" instance method that pushes a provided Pet object
    into the array

The Shelter class, when instantiated, returns an object with a "register"
property.
  - The "register" property is an object with all adopters as property names
    and an array of the adopter's pets as the value.

  - The "adopt" method invokes the Shelter object's "registerPet" method and
    the provided Owner's "adoptPet" method

  - The "registerPet" method assigns the provided Owner object as a property
    name of the "register" object, and pushes the provided Pet object to 
    the property's array

  - The "printAdoptions" method prints every Owner object registered in the
    "register" object property, along with their Pet object (as strings).
*/