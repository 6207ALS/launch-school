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
    return super.introduce() + " Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status)
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

/*
The Dog and Cat classes are subtypes of the Animal class. There are several
behaviors to take note of:

  - the Animal class has a constructor method that takes 5 arguments

    - the Cat and Dog classes invoke this method within their constructor
      methods using the "super" function

    - the Cat and Dog classes' constructor methods, however, don't accept 5 
      arguments. Instead, they take 3 and 4 arguments, respectively.

    - these arguments are passed into the "super" function, as well as some
      default values to fill in the missing arguments.

      - These "default" values are: the number 4 for the "legs" property and 
        'dog'/'cat' for the "species" property.

  - the Cat class overrides the inherited "introduce" method with its own 
  "introduce" method. 

    - However, the custom "introduce" method accesses/invokes the overridden 
      "introduce" method using "super" has the handle (as shown on line 21).

    - In other words, the custom "introduce" method makes use of the "introduce"
      method defined in the Animal superclass.

  - the Dog class takes a fourth argument to its constructor method: "master."

    - this argument is not passed into the super function like the rest of the
      arguments

    - instead, the "master" argument becomes a unique property to Dog instances.
      (as shown in the Dog constructor method)
    
    - this "master" property is accessed in the instance method "greetMaster"
*/