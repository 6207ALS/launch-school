// A simple exercise to create a new object that inherits properties
// from another. 

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// It appears that console.log will only display each object's 'own
// properties'. The object "myObj" only contains inherited properties
// and thus, returns a seemingly empty object. 
console.log('myProtoObj: ');
console.log(myProtoObj);
console.log('myObj: ');
console.log(myObj);
console.log(myObj.foo);
