class Person {
  constructor(name="John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

/*
The "Person" class takes a "name" argument when instantiating a Person object.
It assigns the instance's "name" property to the argument. In addition, the
"name" parameter's default value is "John Doe" when no argument is passed.
Thus, the two "Person" instances on lines 7 and 8 - one instantiated with a 
"name" argument and one without - have different "name" property values, as
shown on lines 10 and 11.  
*/