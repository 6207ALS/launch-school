// name property added to make objects easier to identify

let foo = {
  name: 'foo',
  ancestors() {
    let prototype = Object.getPrototypeOf(this);

    if (Object.prototype.hasOwnProperty.call(prototype, "name")) {
      return [prototype.name].concat(prototype.ancestors());
    }

    return ["Object.prototype"];
  }

};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

/*
The "ancestors" method is a recursive method that returns the prototype chain of
a given object. As shown in lines 16 to 21, the objects 'qux', 'baz, and 'bar',
are in a prototype chain (upstream is in said order). They are each given a name
property. 

The recursive logic:
When called on a given object of the prototype chain, the object's prototype is
checked for a "name" property. If the prototype has a "name" property, the
prototype's name is concated with the return value of the 'ancestors' method 
called on the prototype's prototype. This recursively continues until the 
current object is 'Object.prototype'. Because 'Object.prototype' is the only 
object without a 'name' property, its return value is simply the string
'Object.prototype'.
*/