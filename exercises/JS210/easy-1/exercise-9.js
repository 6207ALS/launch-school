// JS210 Exercises | Easy 1
// Exercise 9 - Multiples of 3 and 5

/*
PROBLEM:
Given an integer, return the sum of all numbers between 1 and the integer (inclusive)
that are multiples of 3 or 5.

Input: Number (integer)
Output: Number (sum)

Rules:
  - Compute the sum of numbers between 1 and N (inclusive) that are multiples of
    3 or 5
  - Assume that the number passed is an integer greater than 1
  - Assume that the argument is always provided

TEST CASES:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

0 + 3 = 3
0 + 3 + 5 = 8
0 + 3 + 5 + 6 + 9 + 10 = 33

REQUIREMENTS:
  - DETERMINE IF A GIVEN NUMBER IS MULTIPLE OF 3 OR 5
    - MULTIPLES OF 3
      - DIVIDE NUMBER BY 3, IF REMAINDER IS 0, NUMBER IS MULTIPLE OF 3
    - MULTIPLES OF 5
      - DIVIDE NUMBER BY 5, IF REMAINDER IS 0, NUMBER IS MULTIPLE OF 5
  
  - ADD MULTIPLES OF 3/5 INTO SUM
  - AFTER ITERATING FROM 1 - N AND ADDING THE MULTIPLES, RETURN THE SUM

*/

function multisum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (isMultiple3(i) || isMultiple5(i)) sum += i;
  }

  return sum;
}

function isMultiple3(n) {
  return n % 3 === 0;
}

function isMultiple5(n) {
  return n % 5 === 0;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168