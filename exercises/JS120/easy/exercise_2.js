// Rectangle and Square Object Factories
function createRectangle(width, length) {
  return {
    width,
    length,

    getWidth() {
      return this.width;
    },
  
    getLength() {
      return this.length;
    },
  
    getArea() {
      return this.width * this.length;
    },
  };
}

function createSquare(size) {
  return createRectangle(size, size);
}


// Rectangle and Square OLOO
const RectanglePrototype = {
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.width * this.length;
  }
}

const SquarePrototype = Object.create(RectanglePrototype);

SquarePrototype.init = function(size) {
  return RectanglePrototype.init.call(this, size, size);
}


// Rectangle and Square Constructors/Prototypes
function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
};

Rectangle.prototype.getLength = function() {
  return this.length;
};

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
};

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


// Rectangle and Square Classes
class RectangleClass {
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

class SquareClass extends RectangleClass {
  constructor(size) {
    super(size, size);
  }
}

let rectangleFactory = createRectangle(2, 3);
let squareFactory = createSquare(2);

let rectangleOLOO = Object.create(RectanglePrototype).init(2, 3);
let squareOLOO = Object.create(SquarePrototype).init(2);

let rectangleConstructor = new Rectangle(2, 3);
let squareConstructor = new Square(2);

let rectangleClass = new RectangleClass(2, 3);
let squareClass = new SquareClass(2);