
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let callbackFn = function(number) {
      return this.name + ' ' + number;
    };

    return [1, 2, 3].map(callbackFn.bind(franchise));
  },
};

console.log(franchise.allMovies());

/*
The code above uses a hard-bound function as the callback function for the
"map" method. If the callback function was to be a standalone function call, the
execution context would be the global object. With the callback function bound
to the "franchise" object, the function can access the appropriate properties. 
*/
