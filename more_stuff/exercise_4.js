/* 
The findMax function finds the largest numeric value within a given array. It
initializes the first element of the array as the largest number (max) for 
the time being. As is iterates over the arr, it compares each element to the
max and if the element's value is greater, the value is declared as the new 
max. 
*/

function findMax(arr) {
  let max = arr[0];
  arr.forEach(num => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

// test cases

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2,2];

console.log(findMax(list1));  // returns 6
console.log(findMax(list2));  // returns -1
console.log(findMax(list3));  // returns 2

// the same results can be achieved through the Math object's max method. 

console.log(Math.max(1, 6, 3, 2));      // returns 6
console.log(Math.max(-1, -6, -3, -2));  // returns -1
console.log(Math.max(2, 2));            // returns 2