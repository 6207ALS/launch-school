let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());

/*
  The code above calls the 'bind' method on a nested function to set its 
execution context to the 'franchise' object. On line 10, the 'allMovies' method
is called on the 'franchise' object using the method invocation syntax. In turn,
the method's implicit execution context is set to the calling object, the
'franchise' object. 
  On line 4, the "map" method is called on an array with a function expression 
passed as the callback function. The 'bind' method is called on the function 
expression with 'this' passed as the argument, or rather, the execution context 
of the 'allMovies' method, the 'franchise' object. In turn, a copy of the 
function expression whose execution context is permanently set to the 
'franchise' object is returned. Similar to the solution demonstrated in the
previous problem, the 'bind' method allows a nested function to refer to its
surrounding context as its own.
*/