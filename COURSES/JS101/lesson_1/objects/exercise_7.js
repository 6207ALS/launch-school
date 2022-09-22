let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

// Snippet 1
console.log('Snippet 1: ')

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2
console.log('Snippet 2: ')

for (let key in myObj) {
  console.log(key);
}

/*
In Snippet 1, the Object.keys() method only returns the object's own 
properties. Thus, it will only log to the console the 'qux' property. 
In Snippet 2 however, the for/in loop will iterate over every property,
including ones that were inherited. Thus, the loop will log to the 
console every property the 'myObj' object contains
*/