console.log("Hello".constructor.name);
// String

console.log([1,2,3].constructor.name);
// Array

console.log({name: 'Srdjan'}.constructor.name);
// Object

/*
The "constructor" property of the called object references the constructor 
function that created the instance object. The constructor function, itself, has
a "name" property that returns its own name. 
*/