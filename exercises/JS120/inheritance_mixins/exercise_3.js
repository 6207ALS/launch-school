// Object Factory
function createVehicle(year) {
  return {
    year,
  };
}

function createTruck(year, bedType) {
  let truck = createVehicle();
  truck.year = year;
  truck.bedType = bedType;

  return truck;
}

function createCar(year) {
  return {
    year,
  }
}

// OLOO (prototypal inheritance)
const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

const TruckPrototype = {
  init(year, bedType) {
    VehiclePrototype.init.call(this, year);
    this.bedType = bedType;
    return this;
  },
};

const CarPrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

// constructor/prototype (pseudo-classical inheritance)
function VehicleC(year) {
  this.year = year;
}

function TruckC(year, bedType) {
  VehicleC.call(this, year);
  this.bedType = bedType;
}

TruckC.prototype = Object.create(VehicleC.prototype);
TruckC.prototype.constructor = TruckC;

function CarC(year) {
  VehicleC.call(this, year);
}

CarC.prototype = Object.create(CarC.prototype);
CarC.prototype.constructor = CarC;

// class (pseudo-classical inheritance)
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

let truck1 = createTruck(2001, "Long");
console.log(truck1.year);
console.log(truck1.bedType);

let truck2 = Object.create(TruckPrototype).init(2002, "Big");
console.log(truck2.year);
console.log(truck2.bedType);

let truck3 = new TruckC(2003, "Small");
console.log(truck3.year);
console.log(truck3.bedType);

let truck4 = new Truck(2004, 'Short');
console.log(truck4.year);
console.log(truck4.bedType);