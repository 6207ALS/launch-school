/*
The function rotateArray rotates an array by moving the first element to the end
of the array. It does not modify the original array. Undefined is returned if 
the input is not an array. An empty array is returned if the input is an empty 
array.

The function first determines if the given argument is an array. If it's not, 
'undefined' is returned. If it is, then the function determines if the length of
the array is 0 or more. If the length is 0, an empty array is returned. If it is
longer than 0, an array with the properly arranged elements is returned. 
*/

function rotateArray (arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0? []: arr.slice(1).concat(arr[0]);
  } else {
    return undefined;
  }
}

// test cases
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// returns `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]