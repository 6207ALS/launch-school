/*
The merge function takes two sorted arrays as arguments and returns a new array 
that contains all the elements from both input arrays in sorted order. The 
function does not sort the result array. It builds the result array one element 
at a time in the proper order.

The function runs a while-loop until the length of the new array is the length 
of the array arguments combined. For each loop, the function determines the 
minimum value of each array, and compares them. The lower value, between 
array1 and array2's minimums, is added to the new array. The value is also 
removed from the array it belongs to. If an array is empty, Math.min() returns 
Infinity, which is then used to compare with the other array's minimum value. 
*/

function merge (a1, a2) {
  let arr1 = a1.slice(); 
  let arr2 = a2.slice();
  let arr3 = [];
  let totalLength = a1.length + a2.length;

  while (arr3.length < totalLength) {
    min = Math.min(...arr1) < Math.min(...arr2) ? arr1.shift(): arr2.shift();
    arr3.push(min);
  }

  return arr3;
}

// test cases
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]