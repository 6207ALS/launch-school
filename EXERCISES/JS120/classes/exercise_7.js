class Person {
  constructor(name="John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

/*
  In the code above, the Person class is declared with a constructor method that
accepts a 'name' argument. The 'name' parameter, as defined on line 2, has a
default value of 'John Doe'. In turn, providing no argument to the constructor
method will assign the execution context a 'name' property with the value of 
of "John Doe". 
  On line 7, the 'person1' variable is declared and initialized the reference to
a new instance of the Person class. Within the invocation of the Person class, 
however, a 'name' argument was not provided. As a result, the returned instance 
is assigned a 'name' property with the value 'John Doe'.
  On line 8, however, the Person class is invocated with a name argument, 
"Pepe". In turn, the returned instance assigned to 'person2' has a 'name' 
property with the value "Pepe". 
  We can determine this happened by logging both object's 'name' property, as
demonstrated on lines 10 and 11.
  This code highlights how the parameters of a class's constructor method can
be assigned default values.
*/