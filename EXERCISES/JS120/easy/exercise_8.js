// Object Factory
function createPerson() {
  return {
    greeting(text) {
      console.log(text);
    },
  };
}

function createShouter() {
  let shouter = createPerson();

  shouter.greeting = function(text) {
    console.log(text.toUpperCase());
  }

  return shouter;
}

// OLOO
const PersonPrototype = {
  init() {
    return this;
  },

  greeting(text) {
    console.log(text);
  },
}

const ShouterPrototype = Object.create(PersonPrototype);

ShouterPrototype.greeting = function(text) {
  PersonPrototype.greeting.call(this, text.toUpperCase());
}

// Constructor
function PersonConstructor() {
}

PersonConstructor.prototype.greeting = function(text) {
  console.log(text);
}

function ShouterConstructor() {
  PersonConstructor.call(this);
}

ShouterConstructor.prototype = Object.create(PersonConstructor.prototype)
ShouterConstructor.prototype.constructor = ShouterConstructor;

ShouterConstructor.prototype.greeting = function(text) {
  PersonConstructor.prototype.greeting.call(this, text.toUpperCase());
}

// Class
class PersonClass {
  constructor() {}

  greeting(text) {
    console.log(text);
  }
}

class ShouterClass extends PersonClass {
  constructor() {
    super();
  }

  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

// Object Factory Tests
let personFactory = createPerson();
let shouterFactory = createShouter();

personFactory.greeting('hello');
shouterFactory.greeting('hello');

// OLOO Tests
let personOLOO = Object.create(PersonPrototype).init();
let shouterOLOO = Object.create(ShouterPrototype).init();

personOLOO.greeting('hello');
shouterOLOO.greeting('hello');

// Constructor/Prototype Tests
let personConstructor = new PersonConstructor();
let shouterConstructor = new ShouterConstructor();

personConstructor.greeting('hello');
shouterConstructor.greeting('hello');

// Classes Tests
let personClass = new PersonClass();
let shouterClass = new ShouterClass();

personClass.greeting('hello');
shouterClass.greeting('hello');