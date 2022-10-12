let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
The code above will log NaN to the console. On line 4, the 'person' object's
'fullName' property is assigned the expression 'this.firstName + this.lastName'.
The 'this' keyword is typically utilized within a method definition as it refers
to the method's execution context. Anywhere outside a method, the 'this' keyword
is bound to the global object. Thus, 'this' on line 4 would refer to the global 
object. Accessing non-existing properties on an object returns undefined, and 
mathematical operations performed on undefined returns NaN. 
*/