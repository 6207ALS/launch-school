class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

/*
In the code above, the Square class is declared as a subclass of the Rectangle
class using the "extends" keyword. In turn, the Square class can use the
"super" function in its constructor method to invoke the Rectangle class's
constructor method. The single argument passed into Square's constructor method
is passed to both arguments for Rectangle's constructor method. In turn, the
Square instance's "width" and "length" properties are assigned to the single
argument.

On line 27, the Square object's instance method, getArea, is inherited from
the Rectangle class (prototype object) and invoked to determine the area of
the square.
*/