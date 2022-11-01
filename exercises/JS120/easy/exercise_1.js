// Rectangle Object Factory 
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

let rectFactory = createRectangle(2, 3);


// Rectangle OLOO
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
  },
};

let rectOLOO = Object.create(RectanglePrototype).init(2, 3);


// Rectangle Constructor/Prototype
function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

let rectConstructor = new Rectangle(2, 3);


// Rectangle Class
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

let rectClass = new Rectangle(2, 3);