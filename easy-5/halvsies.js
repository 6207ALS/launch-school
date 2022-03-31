/*
The halvses function takes an array as an argument and returns an array that 
contains two elements, each of which is an array. It puts the first half of the 
original array elements in the first element of the return value, and puts the 
second half in the second element. If the original array contains an odd number 
of elements, the function places the middle element in the first half array.

The function first determines if the argument array's length is even or odd. 
It then splits the arrays accordingly and pushes each array into the returning
array. 
*/

function halvsies (arr) {
  let halfArrays = [];
  if (arr.length % 2 === 0) {
      halfArrays.push(arr.slice(0, arr.length / 2));
      halfArrays.push(arr.slice((arr.length / 2), arr.length));
  } else {
      halfArrays.push(arr.slice(0, Math.ceil(arr.length / 2)));
      halfArrays.push(arr.slice(Math.ceil(arr.length / 2), arr.length));
  }
  return halfArrays;
}

// test cases
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]   
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]