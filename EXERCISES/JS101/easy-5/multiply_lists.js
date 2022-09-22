/*
The multiplyList function takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index. It is assumed that the 
arguments contain the same number of elements.

The function iterates over the indices of the first array. For each index, it 
adds the product of the corresponding elements from both arrays to a new list. 
*/

function multiplyList(arr1, arr2) {
  let productList = [];
  for (index in arr1) {
    productList.push(arr1[index] * arr2[index]);
  }
  return productList;
}

// test case
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]