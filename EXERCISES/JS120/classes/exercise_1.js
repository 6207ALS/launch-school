console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

/*
The constructor property is defined on the prototype object of a function. This
means that instances of a function can also access this property through
prototypal inheritance. For instance, the [1, 2, 3] array literal's prototype
is the Array function's prototype object. That is, the object referenced by
Array.prototype. Within the prototype object is the constructor property where
the instance can access through prototypal inheritance. However, logging just 
the array's constructor property returns the function that contains the 
prototype object. Instead, we log the prototype object's 'name' property to 
log the name of the function.
*/