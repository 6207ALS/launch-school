/*
The sumSquareDifference function computes the difference between the square of 
the sum of the first nth positive integers and the sum of the squares of the 
first nth positive integers.

The function calculates the sum of the first nth terms by using Faulhaber's 
formulas. The formulas differ depending on the power of the series. When 
calculating the sum of the first nth terms, every number has a power of 1.
e.g. 1 + 2 + 3 is the same as 1^1 + 2^1 + 3^1. The formula derived from this 
pattern was (n^2 + n) / 2. When the power becomes two (e.g. 1^2 + 2^2 + 3^2),
the formula is (n * (n + 1) * (2n + 1)) / 6. 
*/

function sumSquareDifference (num) {
  let sumSquare = (((num ** 2) + num) / 2) ** 2;
  let squareSum = ((num ** 2 + num) * (2 * num + 1)) / 6;

  return sumSquare - squareSum;
}

// test cases
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150