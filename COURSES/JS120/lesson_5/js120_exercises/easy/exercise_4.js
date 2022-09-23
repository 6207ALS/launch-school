class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  info() {
    console.log(
      `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`
    );
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
// My cat Pudding is 7 years old and has black and white fur.

console.log(butterscotch.info());
// My cat Butterscotch is 10 years old and has tan and white fur.

/*
The subclass "Cat" has constructor method that calls the superclass's
constructor method to assign them "name" and "color" properties. In addition,
instances of the Cat class are assigned a "color" property. The Cat class also
has the instance "method" that accesses all properties assigned on the 
instance: "name", "age", and "color".
*/