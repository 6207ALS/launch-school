class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    let firstStatement = super.startEngine();
    let secondStatement = ` Drive ${speed}, please!`;

    return firstStatement + secondStatement;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

/*
The Truck class' "startEngine" method uses the 'super' keyword to access an
instance method defined in the Vehicle superclass. Though instance methods are
typically accessed by an instance of that class, the 'super' keyword allows the
Truck subclass to access any method defined in the Vehicle class.
*/