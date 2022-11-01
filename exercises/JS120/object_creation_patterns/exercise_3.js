[1, null, null]; n=1, o=0
[1, 2, null]; n=2, o=0
[null, 2, null]; n=2, o=1
[null, 2, 3]; n=0, o=1
[4, 2, 3]; n=1, o=1
[4, null, 3]

class CircularQueue {
  constructor(bufferSize) {
    this.buffer = new Array(bufferSize).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(value) {
    if (this.buffer[this.nextPosition] !== null) {
      this.buffer[this.oldestPosition] = value;
      this.oldestPosition = this.increment(this.oldestPosition);
    }

    this.buffer[this.nextPosition] = value;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];

    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition = this.increment(this.oldestPosition);
    }

    return value;
  }

  increment(value) {
    value++;
    if (value >= this.buffer.length) value = 0;

    return value;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);