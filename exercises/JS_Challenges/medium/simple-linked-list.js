class Element {
  constructor(data, nextElement=null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  isTail() {
    return this.next() === null;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.elementCount = 0;
    this.pointer = null;
  }

  push(data) {
    let element = new Element(data, this.pointer);

    this.pointer = element;
    this.elementCount++;
  }

  pop() {
    let head = this.head();
    this.pointer = head.next();
    this.elementCount--;

    return head.datum();
  }

  peek() {
    let head = this.pointer;
    return head ? head.datum() : null;
  }

  isEmpty() {
    return this.pointer === null;
  }

  size() {
    return this.elementCount;
  }

  head() {
    return this.pointer;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!Array.isArray(array)) return list;

    for (let i = array.length - 1; i >= 0; i--) {
      let element = array[i];
      list.push(element);
    }

    return list;
  }

  toArray() {
    let array = [];
    this.forEach(element => {
      array.push(element.datum());
    })

    return array;
  }

  forEach(callback) {
    let currentPointer = this.head();
    while (currentPointer !== null) {
      callback(currentPointer);
      currentPointer = currentPointer.next();
    }
  }

  reverse() {
    let list = new SimpleLinkedList();

    this.toArray().forEach(element => {
      list.push(element);
    });

    return list;
  }
}

module.exports = {
  Element, SimpleLinkedList
};