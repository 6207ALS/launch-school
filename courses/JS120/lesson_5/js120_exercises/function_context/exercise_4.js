
function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]

/*
The 'myFilter' method invokes a callback function with the execution context set
to the provided 'thisArg' argument. Without explicitly setting the context of
the standalone function call, the context would've been the global object. Using
the 'call' method allows the function to access the appropriate properties of a
specific object.
*/