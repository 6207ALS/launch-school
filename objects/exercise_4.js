/* 
The following code creates an array of the 'obj' object's key names, each in
uppercase. 
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// Method 1
// iterates over each key in obj, uppercases it, and pushes it to a new array

let obj2 = [];

for (let key in obj) {
  obj2.push(key.toUpperCase());
}

// Method 2
// creates an array of the 'obj' object's key names and uses .map() to create
// another array with each key uppercased. 

let objKeys = Object.keys(obj);
let obj3 = objKeys.map(key => key.toUpperCase());

// results
console.log(obj);
console.log('Method 1:');
console.log(obj2);
console.log('Method 2:');
console.log(obj3);