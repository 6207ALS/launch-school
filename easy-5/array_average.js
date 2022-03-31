/*
The average function takes one argument, an array of integers, and returns the 
average of all the integers in the array, rounded down to the integer component 
of the average. The array will never be empty, and the numbers will always 
be positive integers.

The function uses the .reduce() method to find the sum of all values in the 
given array. It then divides the sum by the array's length (number of integers)
to determine the average. 
*/

function average (arr) {
  let sum = arr.reduce((acc, element) => acc + element);
  let average = Math.floor(sum / arr.length);
  return average;
}

// test cases
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40