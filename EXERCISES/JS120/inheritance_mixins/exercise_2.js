// Object Factory
function createVehicle(year) {
  return {
    year,
  };
}

function createTruck(year) {
  let truck = createVehicle();
  truck.year = year;

  truck.startEngine = function() {
    console.log("Ready to go!");
  };

  truck.startEngine();
  return truck;
}

// OLOO (prototypal inheritance)
const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

const TruckPrototype = Object.create(VehiclePrototype);

TruckPrototype.startEngine = function() {
  console.log("Ready to go!");
};

TruckPrototype.init = function(year) {
  this.year = year;
  this.startEngine();
  return this;
};

// constructor/prototype (pseudo-classical)
function VehicleC(year) {
  this.year = year;
}

function TruckC(year) {
  VehicleC.call(this, year);
  this.startEngine();
}

TruckC.prototype = Object.create(VehicleC.prototype);
TruckC.prototype.constructor = TruckC;

TruckC.prototype.startEngine = function() {
  console.log("Ready to go!");
}

// class (pseudo-classical)
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = createTruck(2001); // Ready to go!
console.log(truck.year);       // 2001

truck = Object.create(TruckPrototype).init(2002); // Ready to go!
console.log(truck.year);                          // 2002

truck = new TruckC(2003); // Ready to go!
console.log(truck.year);  // 2003

truck = new Truck(2004); // Ready to go!
console.log(truck.year); // 2004