
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

/*
The "allMovies" method in the provided example code used a function expression
as the callback function of 'map'. However, because the "map" method invokes the
callback function as a standalone function, "this" is binded to the global
object. Ultimately, the "franchise" object's 'name' property can not be accessed
this way.

There are several methods to resolving this issuse. In the code above, the
standalone function is replaced with an arrow function. An arrow function will
bind its 'this' value to that of the outer scope. In this case, the outer scope
is the 'allMovies' method, which was invoked with the 'franchise' object. Thus,
the arrow function adopts the 'franchise' object as the execution context. In
turn, the callback function can access the 'franchise' object's 'name' property.
*/