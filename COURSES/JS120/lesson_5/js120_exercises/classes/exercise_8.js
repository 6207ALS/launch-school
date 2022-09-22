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
The "Cat" class has a "rename" method reassigns an instance's "name" property to 
its argument when invoked. In this case, the Cat instance "kitty", which had an
initial "name" property of "Sophie" was reassigned to "Chloe."
*/