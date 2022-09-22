/*
The multiplyAllPairs function takes two array arguments, each containing a list 
of numbers, and returns a new array containing the products of all combinations 
of number pairs that exist between the two arrays. The returned array is sorted 
in ascending numerical order. It is assumed that neither argument will be an 
empty array.

The function uses a nested for-loop to iterate over every element of one array
for every element in the other. For each iteration, the function adds the 
product of the two numbers to the returned array. The returned array is sorted
with the .sort() method, which uses a compare function to define the sort order
(ascending numeric value). 
*/

function multiplyAllPairs (arr1, arr2) {
  let arr = [];
  for (num1 of arr1) {
    for (num2 of arr2) {
      arr.push(num1 * num2);
    }
  }
  return arr.sort((a,b) => a > b? 1:-1);
}

// test case
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])