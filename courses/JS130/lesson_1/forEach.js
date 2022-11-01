/*
(JS130) Lesson 1 - Walkthrough: Build a forEach method
*/

function forEach(array, callback, thisArg) {
  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

// a reimplementation of JavaScript's built-in 'forEach' method.
let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));

// refactored to accept a 'this' argument: callback function's execution context
let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

// refactored again to pass the current element's index to the callback function
forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});