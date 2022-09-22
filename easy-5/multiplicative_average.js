/*
The multiplicativeAverage function takes an array of integers as input, 
multiplies all of the integers together, divides the result by the number of 
entries in the array, and returns the result as a string with the value rounded 
to three decimal places.

The function finds the product of all integers using the .reduce() method, 
multiplying every element in the array to eachother. It then finds the average
by dividing the product by the length of the array, and formatting the number
to three decimal places. 
*/

function multiplicativeAverage (arr) {
  let product = arr.reduce((acc, element) => acc * element);
  let average = (product / arr.length).toFixed(3);
  return String(average);
}

// test cases
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"