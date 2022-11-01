/*
Answers for JS120 - Lesson 4, Practice Problems: Mixins
*/

// Q1
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Truck.prototype, Speed);

let car = new Car();
car.goFast(); // I'm a Car and going super fast!

let truck = new Truck();
truck.goFast(); // I'm a Truck and going super fast!

console.log('goFast' in car); // true
console.log('goFast' in blueTruck); // true

/*
Using the Object.assign method, we can create mix-ins with the 'Speed' object
for classes Car and Truck. Lines 17 and 24 use the Object.assign method to copy
the properties from the 'Speed' object to the Car and truck classes' prototype
object. In turn, all instances created by Car and Truck inherit the methods
defined in the Speed object.

We can test if the mix-in worked by invoking the 'goFast' method on instances
of both classes. The code above logs "I'm a Car and going super fast!" and
"I'm a Truck and going super fast!" to the console.

Alternatively, we can use the 'in' keyword to determine if a given property name
is defined on an instance or the instance's prototype chain (as demonstrated on
lines 32 and 33).
*/


// Q2

/*
In the code for Problem 1, an instance of a Car class will return the Car
class when requested for its 'constructor' property. When invoking a method
on an object, 'this' is binded to the called object. In our case, an instance of 
type Car is the called object. The 'constructor' property of the object is then 
accessed, which is located in the Car class' prototype object. Its value refers 
to the Car class/constructor itself. The 'goFast' method then accesses the 
constructor's 'name' property, which is simply the string 'Car.'
*/


// Q3
const Vehicle = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }
}

Object.assign(WheeledVehicle.prototype, Vehicle)

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

Object.assign(Catamaran.prototype, Vehicle);

/*
The code above makes use of mix-ins to assign methods to distinct constructors.
The WheeledVehicle constructor's prototype object is assigned methods from the
Vehicle object using the Object.assign method. The mix-in allows its instances
and those from its subclasses, Auto and Motorcycle, to make use of the methods
defined in the Vehicle object. The Catamaran class, slightly peripheral to the
subclasses, also makes use of a mix-in to assign Vehicle's methods to its
prototype object.
*/