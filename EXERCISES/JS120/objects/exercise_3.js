function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key of obj1Keys) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

/*
The 'objectsEqual' function defined above returns a boolean indicating if two
given objects are equal, meaning both objects have the same key/value pairs. The
function checks for two things: if the number of keys for both objects are the
same and if every key/value pair in one object exists in the other object.
If either catch case returns false, the function returns false. If both pass
for every 
*/