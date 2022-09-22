/*
The runningTotal function takes an array of numbers and returns an array with 
the same number of elements, but with each element's value being the running 
total from the original array.

The function runs several nested functions on the array: .map(), .slice(), and 
.reduce(). Using .map(), the function iterates over each element of the array, 
reassigning it a new value. Each value is determined through .reduce(), which 
finds the sum of every element from index 0 to that of the current element.
*/

function runningTotal(arr) {
  return arr.map((element, index) => {
    return arr.slice(0, index + 1).reduce((acc, element) => acc + element);
  });
}

// test cases
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []