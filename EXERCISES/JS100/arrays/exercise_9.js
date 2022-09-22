// The isThereThree() function determines if a given array contains the number
// three, without the use of a for, while, or do/while loop. Using the filter
// method, the function iterates over the elements and looks for the value 3.
// If there is, return true (else, returns false). 

function isThereThree(arr) {
  let filterThree = arr.filter(element => element === 3); 
  return filterThree.length > 0? true:false;
}

// test cases

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(isThereThree(numbers1));
console.log(isThereThree(numbers2));
console.log(isThereThree(numbers3));