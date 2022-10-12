// OLOO (prototypal inheritance)
const VehiclePrototype = {
  init() {
    return this;
  },

  startEngine() {
    return "Ready to go!";
  },
};

const TruckPrototype = {
  init() {
    return this;
  },

  startEngine(speed) {
    return `${VehiclePrototype.startEngine()} Drive ${speed}, please!`;
  },
};

// constructor/prototype (pseudo-classical inheritance)
function VehicleC() {
}

VehicleC.prototype.startEngine = function() {
  return "Ready to go!";
};

function TruckC() {
}

TruckC.prototype.startEngine = function(speed) {
  return `${Vehicle.prototype.startEngine()} Drive ${speed}, please!`;
}

// class (pseudo-classical inheritance)
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return `${super.startEngine()} Drive ${speed}, please!`;
  }
}


let truck2 = Object.create(TruckPrototype).init();
console.log(truck2.startEngine("carefully"));

let truck3 = new TruckC();
console.log(truck3.startEngine("slow"))

let truck4 = new Truck();
console.log(truck4.startEngine('fast'));