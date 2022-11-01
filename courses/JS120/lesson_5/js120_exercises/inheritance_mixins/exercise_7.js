const towMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
}

class Truck {}
Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
truck.tow();

/*
In the code above, properties of the "towMixin" object are copied into the
Truck class's prototype object. In turn, all instances of the Truck class
inherit the "tow" method.
*/