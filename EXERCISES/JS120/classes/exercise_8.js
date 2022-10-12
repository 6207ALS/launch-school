class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

/*
  In the code above, the Cat class is declared with a 'rename' instance method.
The method enables instances of the Cat class to reassign their 'name' property
to a provided value.
  On line 11, the 'kitty' variable is declared and initialized the reference to
a new instance of the Cat class. The returned instance is assigned a name 
property with a value of 'Sophie'. 
  On line 13, the 'rename' method is called from the 'kitty' object using the
method invocation syntax. In turn, the implicit execution context is set to the
calling object, the 'kitty' object. The 'rename' method accesses the execution
context's 'name' property and reassigns its value to the passed argument. In
this case, the 'kitty' object's 'name' property is reassigned to the passed
argument, "Chloe".
  This code demonstrates how instance methods can be defined to reassign the
states of an object.
*/