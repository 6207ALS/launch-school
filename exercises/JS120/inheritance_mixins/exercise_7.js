const towMixin = {
  tow() {
    return "I can tow a trailer!";
  },
};

// Object Factory and Mixin
function createTruck() {
  let truck = {};
  Object.assign(truck, towMixin);

  return truck;
}

function createCar() {
  return {};
}

// OLOO and Mixin
const TruckPrototype = {
  init() {
    return this;
  },
};

const CarPrototype = {};

Object.assign(TruckPrototype, towMixin);

// Constructor and Mixin
function TruckC() {}

function CarC() {}

Object.assign(TruckC.prototype, towMixin);

// Class and Mixin
class Truck {}
Object.assign(Truck.prototype, towMixin);

class Car {}


// TESTS

let truckFactory = createTruck();
console.log(truckFactory.tow());

let truckOLOO = Object.create(TruckPrototype).init();
console.log(truckOLOO.tow());

let truckConstructor = new TruckC();
console.log(truckConstructor.tow());

let truckClass = new Truck();
console.log(truckClass.tow());