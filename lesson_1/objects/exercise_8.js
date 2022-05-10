/*
The copyObj function creates and returns a copy of a given object. The function
takes two arguments, the object to copy and an array of the keys that you want 
to copy. If an array of keys is not passed, the function will simply copy all 
of the existing keys from the object. 
*/

function copyObj(obj, arrOfKeys=[]) {
  copyOfObj = {};

  // if an array of keys was passed...
  if (arrOfKeys.length > 0) {              
    for (let i = 0; i < arrOfKeys.length; i++) { 
      // find the key/value in the object using each given key and add it to the 
      // copy of the object
      copyOfObj[arrOfKeys[i]] = obj[arrOfKeys[i]]; 
    }
  // if an array of keys was not passed...
  } else {                                
    for (let key in obj) {
      // add every key:value pair within the object to the copy of the object
      copyOfObj[key] = obj[key];     
    }
  }

  return copyOfObj;
}

// test cases

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
    