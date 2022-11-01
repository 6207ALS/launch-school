const walkMixin = {
  walk() {
    console.log(`${this.name} ${this.gait()} forward`);
  }
}

// Object Factory and Mixin
function createPerson(name) {
  let person = {
    name,
    gait() {
      return "strolls";
    },
  };

  Object.assign(person, walkMixin);

  return person;
}

function createCat(name) {
  let cat = {
    name,
    gait() {
      return "saunters";
    },
  };

  Object.assign(cat, walkMixin);

  return cat;
}

function createCheetah(name) {
  let cheetah = {
    name,
    gait() {
      return "runs";
    },
  };

  Object.assign(cheetah, walkMixin);

  return cheetah;
}

// OLOO and Mixin
const PersonPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return "strolls";
  },
}

Object.assign(PersonPrototype, walkMixin);

const CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return "saunters";
  },
}

Object.assign(CatPrototype, walkMixin);

const CheetahPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return "runs";
  },
}

Object.assign(CheetahPrototype, walkMixin);

// Constructor and Mixin
function PersonConstr(name) {
  this.name = name;
}

PersonConstr.prototype.gait = function() {
  return 'strolls';
}

Object.assign(PersonConstr.prototype, walkMixin);

function CatConstr(name) {
  this.name = name;
}

CatConstr.prototype.gait = function() {
  return "saunters";
}

Object.assign(CatConstr.prototype, walkMixin);


function CheetahConstr(name) {
  this.name = name;
}

CheetahConstr.prototype.gait = function() {
  return 'runs';
}

Object.assign(CheetahConstr.prototype, walkMixin);

// Classes and Mixin
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

Object.assign(PersonClass.prototype, walkMixin);

class CatClass {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

Object.assign(CatClass.prototype, walkMixin);

class CheetahClass {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(CheetahClass.prototype, walkMixin);


// Factory Function / Mixin Tests
let mike = createPerson('Mike');
console.log(mike.walk());

let kitty = createCat('Kitty');
console.log(kitty.walk());

let flash = createCheetah("Flash");
console.log(flash.walk());

// OLOO / Mixin Tests
mike = Object.create(PersonPrototype).init("Mike");
console.log(mike.walk());

kitty = Object.create(CatPrototype).init("Kitty");
console.log(kitty.walk());

flash = Object.create(CheetahPrototype).init("Flash");
console.log(flash.walk());

// Contructor/Prototype/Mixin Tests
mike = new PersonConstr("Mike");
console.log(mike.walk());

kitty = new CatConstr("Kitty")
console.log(kitty.walk());

flash = new CheetahConstr("Flash");
console.log(flash.walk());


// Class/Mixin Tests
mike = new PersonClass("Mike");
console.log(mike.walk());

kitty = new CatClass("Kitty");
console.log(kitty.walk());

flash = new CheetahClass("Flash");
console.log(flash.walk());