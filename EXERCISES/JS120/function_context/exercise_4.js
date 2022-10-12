function myFilter(array, func, context) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
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
  In the code above, the 'myFilter' function is updated to accept an additional
argument, a 'context' argument. This allows the function to invoke its 'func'
argument with an explicit execution context. With the 'filter' object as the
explicit execution context, the intended 'allowedValues' properties can be 
accessed to property execute the 'func' callback function.
*/