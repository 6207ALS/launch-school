/*
Answers for JS120 - Lesson 4, Practice Problems: Object Creation with Prototypes
*/

// Q1
function createPet(animal, name) {
  return {
    animal,
    name,

    sleep() {
      console.log("I am sleeping");
    },

    wake() {
      console.log("I am awake");
    }
  }
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

/*
The code above demonstrates a factory function that returns a pet object. The
pet object contains two properties (animal and name) and two methods (sleep and
wake).
*/

// Q2
let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep() {
    console.log("I am sleeping");
  },

  wake() {
    console.log("I am awake");
  }
}

pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

/*
The code above demonstrates the use of OLOO object creation. The 'PetProtoype'
object acts as the prototype for the returned object when passed as the argument 
for Object.create(). The returned object inherits all properties defined within
the 'PetPrototype' object. The object's 'init' method is then invoked to assign
it the necessary properties.
*/


// Q3

/*
The OLOO object creation pattern has a significant advantage over factory 
functions: memory efficiency. Every object created by factory functions are
given their own copy of common methods and properties. This can demand heavy 
loads of memory when handling many objects at a time. Whereas, all objects
created through the OLOO pattern inherit their methods from a single prototype
object. Objects created in problem 2 share their common methods because their 
[[Prototype]] properties are set to reference the singular 'PetPrototype'
object.
*/