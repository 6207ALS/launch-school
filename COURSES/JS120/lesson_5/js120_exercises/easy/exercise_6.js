class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

/*
The Car, Motorcycle, and Truck classes are subtypes of the Vehicle class.

It should be noted that the Car and Motorcycles subclasses can be defined
without a constructor method. That is, both subclasses will, by default,
invoke their superclass's constructor method if their own class declaration
does not contain one. This works because both subclasses only have properties
that are also declared in the Vehicle constructor method.

The Truck subclass, however, contains an additional property unique to its
type: the "payload" property. In this case, the Truck subclass must contain
a constructor method that invokes the "super" function. Only then, can the
"payload" property be assigned to the object.
*/