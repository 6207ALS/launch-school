function CircularQueue(length) {
  this.queue = new Array(length).fill(null);
  this.start = 0;
  this.length = length;
}

CircularQueue.prototype.enqueue = function(val) {
  let queue = this.queue;
  let start = this.start;
  let position = start;

  for (let i = 0; i < this.length; i++) {
    if (queue[position] === null) {
      queue[position] = val;
      return;
    }
    position = this.increment(position);
  }

  queue[start] = val;
  this.start = this.increment(this.start); 
}

CircularQueue.prototype.dequeue = function() {
  let queue = this.queue;
  let start = this.start;
  let oldestValue = queue[start];

  if (queue.every(value => value === null)) return null;
  
  queue[start] = null;
  this.start = this.increment(this.start);

  return oldestValue;
}

CircularQueue.prototype.increment = function(val) {
  return (val + 1) % this.length;
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