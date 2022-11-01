class Cat {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

/*
  We can avoid calling the Cat constructor, but still create a 'Cat like' object
using the Object.create method. By passing the Cat class's prototype object
as the argument of the 'create' method, we effectively create a new object
whose prototype is the Cat class's prototype object. In other words, the
'fakeCat' object inherits properties, such as 'constructor' and 'speaks', from
its prototype, or the Cat class's prototype object. 
  In turn, the 'fakeCat' logs the expected outputs when tested for certain 
cases. The 'fakeCat' IS an 'instanceof' of the Cat class because the operator
searches for the Cat class's prototype object in the object's prototype chain.
We achieved that on line 11. Next, accessing the 'fakeCat' object's 'name'
property returns undefined, simply because we did not assign any properties or
invoke a constructor method onto the object. Finally, we can invoke the 'speaks'
method from the 'fakeCat' object because it inherits the method from its
prototype, the Cat class's prototype object. 
*/