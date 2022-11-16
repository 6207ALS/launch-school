function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      for (let value of stack) {
        console.log(value);
      }
    },
  }
}

/*
The function above returns an object with methods that can operate on a stack,
a compound data type like an array. The 'push' method allows values to be
appended to the stack. The 'pop' method removes the last inserted value. The
'printStack' method logs every value of the stack, starting from the oldest
item.

The key feature of the function is the use of closure to create the stack as
private data. It keeps the array from being accessible from the outside. Only
the returned object can operate on the stack, and, even so, does not provide
a way to directly access the stack.
*/