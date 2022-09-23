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

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

/*
In the code above, a Rectangle class is declared. When instantiated, the
class takes two arguments, "width" and "length", which are assigned as
properties for the returned object. In addition, instances of the Rectangle
object inherit the instance methods "getWidth", "getLength", and "getArea", as
defined from lines 7 to 17. 
*/