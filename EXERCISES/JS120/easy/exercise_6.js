// Object Factory
function createVehicle(make, model) {
  return {
    make,
    model,

    info() {
      return `${this.make} ${this.model}`;
    }
  }
}

function createCar(make, model) {
  let car = createVehicle(make, model);
  car.getWheels = function() {
    return 4;
  }

  return car;
}

function createMotorcycle(make, model) {
  let motorcycle = createVehicle(make, model);
  motorcycle.getWheels = function() {
    return 2;
  }

  return motorcycle;
}

function createTruck(make, model, payload) {
  let truck = createVehicle(make, model);
  truck.payload = payload;
  truck.getWheels = function() {
    return 6;
  }

  return truck;
}


// OLOO (Prototypal Inheritance)
const VehiclePrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  info() {
    return `${this.make} ${this.model}`;
  }
}


const MotorcyclePrototype = Object.create(VehiclePrototype);

MotorcyclePrototype.getWheels = function() {
  return 2;
}


const CarPrototype = Object.create(VehiclePrototype);

CarPrototype.getWheels = function() {
  return 4;
}


const TruckPrototype = Object.create(VehiclePrototype);

TruckPrototype.init = function(make, model, payload) {
  VehiclePrototype.init.call(this, make, model);
  this.payload = payload;
  return this;
} 

TruckPrototype.getWheels = function() {
  return 6;
}



// Constructors/Prototypes (Pseudo-classical Inheritance)
function VehicleConstructor(make, model) {
  this.make = make;
  this.model = model;
}

VehicleConstructor.prototype.info = function() {
  return `${this.make} ${this.model}`;
}


function CarConstructor(make, model) {
  VehicleConstructor.call(this, make, model);
}

CarConstructor.prototype = Object.create(VehicleConstructor.prototype);
CarConstructor.prototype.constructor = CarConstructor;

CarConstructor.prototype.getWheels = function() {
  return 4;
}


function MotorcycleConstructor(make, model) {
  VehicleConstructor.call(this, make, model);
}

MotorcycleConstructor.prototype = Object.create(VehicleConstructor.prototype);
MotorcycleConstructor.prototype.constructor = MotorcycleConstructor;

MotorcycleConstructor.prototype.getWheels = function() {
  return 2;
}


function TruckConstructor(make, model, payload) {
  VehicleConstructor.call(this, make, model);
  this.payload = payload;
}

TruckConstructor.prototype = Object.create(VehicleConstructor.prototype);
TruckConstructor.prototype.constructor = TruckConstructor;

TruckConstructor.prototype.getWheels = function() {
  return 6;
}



// Class (Pseudo-classical Inheritance)
class VehicleClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class CarClass extends VehicleClass {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 4;
  }
}

class MotorcycleClass extends VehicleClass {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 2;
  }
}

class TruckClass extends VehicleClass {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}


// Object Factory tests
let vehicleFactory = createVehicle('vehicle', '1');
let carFactory = createCar('car', '2');
let motorcycleFactory = createMotorcycle('motorcycle', '3');
let truckFactory = createTruck('truck', '4');

console.log(vehicleFactory.info());

console.log(carFactory.info());
console.log(carFactory.getWheels());

console.log(motorcycleFactory.info());
console.log(motorcycleFactory.getWheels());

console.log(truckFactory.info());
console.log(truckFactory.getWheels());

// OLOO tests
let vehicleOLOO = Object.create(VehiclePrototype).init('vehicle', '5');
let carOLOO = Object.create(CarPrototype).init('car', '6');
let motorcycleOLOO = Object.create(MotorcyclePrototype).init('motorcycle', '7');
let truckOLOO = Object.create(TruckPrototype).init('truck', '8');

console.log(vehicleOLOO.info());

console.log(carOLOO.info());
console.log(carOLOO.getWheels());

console.log(motorcycleOLOO.info());
console.log(motorcycleOLOO.getWheels());

console.log(truckOLOO.info());
console.log(truckOLOO.getWheels());

// Constructors/Prototype tests
let vehicleConstructor = new VehicleConstructor('vehicle', '9');
let carConstructor = new CarConstructor('car', '10');
let motorcycleConstructor = new MotorcycleConstructor('motorcycle', '11');
let truckConstructor = new TruckConstructor('truck', '12');

console.log(vehicleConstructor.info());

console.log(carConstructor.info());
console.log(carConstructor.getWheels());

console.log(motorcycleConstructor.info());
console.log(motorcycleConstructor.getWheels());

console.log(truckConstructor.info());
console.log(truckConstructor.getWheels());

// Classes test
let vehicleClass = new VehicleClass('vehicle', '9');
let carClass = new CarClass('car', '10');
let motorcycleClass = new MotorcycleClass('motorcycle', '11');
let truckClass = new TruckClass('truck', '12');

console.log(vehicleClass.info());

console.log(carClass.info());
console.log(carClass.getWheels());

console.log(motorcycleClass.info());
console.log(motorcycleClass.getWheels());

console.log(truckClass.info());
console.log(truckClass.getWheels());