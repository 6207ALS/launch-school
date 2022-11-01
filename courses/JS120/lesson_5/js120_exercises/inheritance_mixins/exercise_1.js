class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}
class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015

/*
The Truck and Car classes extend the Vehicle class. In other words, the Truck
and Car classes are subtypes of the Vehicle class. When classes are declared
without a constructor method, JavaScript will automatically insert one. An
example for a typical class looks like:

constructor() {
}

And the constructor method for a subclass (like Truck and Car) will look like:

constructor(...args) {
  super(...args);
}

Which explains why the instances truck and car, in the code above, were able to
access their year property despite their classes not having their own 
constructor method. Under the hood, JavaScript invoked their superclass' 
constructor method when the objects were being instantiated.
*/