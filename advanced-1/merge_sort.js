/*
In continuation of exercise "Advanced 1: Merge Sorted Lists"...
The mergeSort function takes an array argument and returns a new array that 
contains the values from the input array in sorted order, using the merge sort 
algorithm.

The function first determines its base case, the point at which it returns a 
value rather than executing another recursive call. If the length of the array
argument is 1, return the array. If not, split the current array into two 
halves, left and right, and call mergeSort again on both of them. At the point
where all halves are a length of 1, they are merged together, in sorted order.
*/

function merge (a1, a2) {
  let arr1 = a1.slice(); 
  let arr2 = a2.slice();
  let arr3 = [];

  while (arr1.length > 0 && arr2.length > 0) {
    min = arr1[0] <= arr2[0] ? arr1.shift(): arr2.shift();
    arr3.push(min);
  }

  return arr3.concat(arr1.length === 0? arr2:arr1);
}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let half = Math.ceil((arr.length / 2));
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));
    return merge(left, right);
  }
}

// test cases
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]