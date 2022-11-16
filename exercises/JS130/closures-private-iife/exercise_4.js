function delegate(object, method, ...args) {
  return function() {
    object[method].apply(object, args);
  }
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

/*
The 'delegate' function above is used to delegate a method (or function) of one
object to another object's method. delegate takes a minimum of two arguments: 
(1) the object and (2) name of the method on the object. The remaining 
arguments, if any, are passed — as arguments — to the objects' method that it 
delegates to.
*/