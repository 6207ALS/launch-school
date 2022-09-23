class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

/*
The Truck class' constructor accepts two arguments: year and bedType. The year
argument is passed to the super() method to invoked the superclass' constructor
method (class Vehicle). The second argument, bedType, is then used to assign
a 'bedType' property to the Truck instance. This way, only Truck instances are
assigned a 'bedType' property, but retains the "year" property that all Vehicle
subtypes receive.
*/