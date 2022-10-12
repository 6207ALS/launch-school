let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

/*
  The code above makes use of lexical scoping to preserve the context for a nested
function. On line 11, the "allMovies" method is called from the 'franchise'
object using the method invocation syntax. In turn, the method's implicit
execution context is set to the calling object, 'franchise'. On line 4, the
value of 'this', or the execution context of the method, is assigned to the
'self' variable. 
  On line 5, the .map method is called on an array with a function expression
passed as the callback function. Because callback functions are invoked as
standalone functions, the use of the 'this' keyword in the function would refer
to the global object. However, the callback function refrains from using the
'this' keyword and, instead, uses the 'self' variable to refer to the 
'franchise' object. In turn, the callback function can access the properties
from the intended object.
  This code demonstrates how lexical scoping can be used to avoid context loss
in a nested function. That is, the scope of an inner function can access 
variables from an outer function. In this case, the accessed variable was the
reference to the needed execution context.
*/