// Object Factory
function createVehicle(year) {
  return {
    year,
  }
}

function createTruck(year) {
  let truck = createVehicle();
  truck.year = year;

  return truck;
}

function createCar(year) {
  let car = createVehicle();
  car.year = year;

  return car;
}

// OLOO Pattern (Prototypal Inheritance)
const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

const TruckPrototype = Object.create(VehiclePrototype);
const CarPrototype = Object.create(VehiclePrototype);

// Constructor/Prototype (Pseudo-classical Inheritance)
function VehicleC(year) {
  this.year = year;
}

function TruckC(year) {
  VehicleC.call(this, year);
}

TruckC.prototype = Object.create(VehicleC.prototype);
TruckC.prototype.constructor = TruckC;

function CarC(year) {
  VehicleC.call(this, year);
}

CarC.prototype = Object.create(VehicleC.prototype);
CarC.prototype.constructor = CarC;


// Class (Pseudo-classical Inheritance)
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

class Car extends Vehicle {
  constructor(year) {
    super(year);
  } 
}

// Object Factory
let truck = createTruck(2001);
console.log(truck.year);

let car = createCar(2002);
console.log(car.year);

// OLOO Test
truck = Object.create(TruckPrototype).init(2003);
console.log(truck.year);

car = Object.create(CarPrototype).init(2004);
console.log(car.year);

// Constructor/Prototype Test
truck = new TruckC(2005);
console.log(truck.year);

car = new CarC(2006);
console.log(car.year);

// Class test
truck = new Truck(2007);
console.log(truck.year);

car = new Car(2008);
console.log(car.year);