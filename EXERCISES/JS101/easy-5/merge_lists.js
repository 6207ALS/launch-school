/*
The interleave function combines two arrays passed as arguments, and returns a 
new array that contains all elements from both array arguments, with each 
element taken in alternation. It is assumed that both input arrays are 
non-empty, and that they have the same number of elements.

The function loops over the indices of the first array. For each index, it 
adds the corresponding element from both arrays to the new array. 
*/

function interleave (arr1, arr2) {
  let mergedList = [];
  for (index in arr1) {
    mergedList.push(arr1[index]);
    mergedList.push(arr2[index]);
  }
  return mergedList;
}

// test case
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]