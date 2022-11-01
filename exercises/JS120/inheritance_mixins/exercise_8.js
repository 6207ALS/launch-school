const towMixin = {
  tow() {
    return "I can tow a trailer!";
  },
};

// Object Factory and Mixin
function createVehicle(year) {
  return {
    year,
  };
}

function createTruck(year) {
  let truck = createVehicle(year);
  Object.assign(truck, towMixin);

  return truck;
}

function createCar(year) {
  let car = createVehicle(year);
  return car;
}


// OLOO and Mixin
const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
}

const TruckPrototype = Object.create(VehiclePrototype);
Object.assign(TruckPrototype, towMixin);

const CarPrototype = Object.create(VehiclePrototype);


// Constructor/Prototype and Mixin
function VehicleC(year) {
  this.year = year;
}

function TruckC(year) {
  VehicleC.call(this, year);
}

TruckC.prototype = Object.create(VehicleC.prototype);
TruckC.prototype.constructor = TruckC;

Object.assign(TruckC.prototype, towMixin);

function CarC(year) {
  VehicleC.call(this, year);
}

CarC.prototype = Object.create(VehicleC.prototype);
CarC.prototype.constructor = CarC;


// Class and Mixin
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}

Object.assign(Truck.prototype, towMixin);

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truckFactory = createTruck(2001);
console.log(truckFactory.year);
console.log(truckFactory.tow());

let carFactory = createCar(2002);
console.log(carFactory.year);

let truckOLOO = Object.create(TruckPrototype).init(2003);
console.log(truckOLOO.year);
console.log(truckOLOO.tow());

let carOLOO = Object.create(CarPrototype).init(2004);
console.log(carOLOO.year);

let truckConstructor = new TruckC(2005);
console.log(truckConstructor.year);
console.log(truckConstructor.tow());

let carConstructor = new CarC(2006);
console.log(carConstructor.year);

let truckClass = new Truck(2007);
console.log(truckConstructor.year);
console.log(truckConstructor.tow());

let carClass = new Car(2008);
console.log(carConstructor.year);