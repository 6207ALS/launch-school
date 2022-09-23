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

let truck = new Truck(2003);
console.log(truck.year); // 2003

/*
When instantiating objects of the Truck class, its constructor method is
invoked on the returned object. The constructor method, as shown on lines 8 to
11, invokes its superclass' constructor method, as well as the "startEngine"
method from the class' prototype object. Thus, the "truck" object logs
"Ready to go!" to the console when instantiated on line 18.
*/