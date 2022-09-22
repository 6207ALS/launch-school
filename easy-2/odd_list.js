/*
The oddities function returns an array that contains every other element of a 
given array. The values of the returned list are the values that are in the 
1st, 3rd, 5th, and so forth elements of the passed array. 
*/

function oddities (arr) {
  let oddArr = []
  for (let i = 0; i < arr.length; i+=2) {
    oddArr.push(arr[i]);
  }
  return oddArr;
}

console.log(oddities([2, 3, 4, 5, 6]));     // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6]));  // logs [1, 3, 5]
console.log(oddities(["abc", "def"]));      // logs ['abc']
console.log(oddities([123]));               // logs [123]
console.log(oddities([]));                  // logs []