const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

/*
In the code above, both Truck and Car classes inherit from the Vehicle class.
When instantiating Truck and Car objects, the constructor method from
their superclass (Vehicle) is invoked, assigning the returned object a "year"
property. In addition, instances of the Truck class are also assigned the "tow"
method from a mixin object.
*/