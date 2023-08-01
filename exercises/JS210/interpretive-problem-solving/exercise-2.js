// JS210 Exercises | Interpretive Problem Solving
// Exercise 2 - Diamond

/*
PROBLEM:
Given n, a number, display a diamond with the dimensions n x n.

Input: Number
Output: String

Rules
  - n determines the dimensions of diamond
  - assume will always be odd
  - assume n will always be a number
  - assume n will always be provided

TEST CASES:

diamond(1);
*

diamond(3);
 *
***
 *

diamond(9);
    *    
   ***
  *****  
 *******
*********
 *******
  *****
   ***
    *

NOTES:
  - number of layers = n
  - each layer has 2 components: whitespace and number astericks


REQUIREMENTS:
  DETERMINE NUMBER OF STARS FOR EACH LAYER
    ODD NUMBERS 1 - N BACK TO N - 1
    [1, 3, 5, 7, 9, 7, 5, 3, 1]
  
  DETERMINE NUMBER OF WHITESPACE FOR EACH LAYER
    (N - NUMBER OF STARS) / 2
    [4, 3, 2, 1, 0, 1, 2, 3, 4]

DATA STRUCTURE:
  ARRAY - DETERMINE ORDER OF LAYERS

ALGORITHM:
  LET STARS = []
  LET WHITESPACE = []
  LET ODD_NUMBER = 1
  LET INCREMENT = 2;

  FOR N TIMES
    PUSH ODD_NUMBER TO STARS
    ODD_NUMBER = ODD_NUMBER + INCREMENT
    IF ODD_NUMBER IS N
      INCREMENT = -2
  
  FOR EACH ELEMENT IN STARS
    PUSH ((N - NUMBER OF STARS) / 2) TO WHITESPACE

  ITERATE THROUGH INDICES OF BOTH STARS AND WHITESPACE ARRAYS
    PRINT WHITESPACE[i] NUMBER OF WHITESPACE + STARS[i] NUMBER OF STARS
*/

function diamond(n) {
  let numStars = [];
  let numWhiteSpace = [];
  let oddNumber = 1;
  let increment = 2;

  for (let i = 0; i < n; i++) {
    numStars.push(oddNumber);
    oddNumber += increment;
    if (oddNumber === n) increment = -increment;
  }

  numStars.forEach(num => numWhiteSpace.push((n - num) / 2));

  for (let i = 0; i < numStars.length; i++) {
    console.log(`${" ".repeat(numWhiteSpace[i])}${"*".repeat(numStars[i])}`);
  }
}

diamond(1);
diamond(3);
diamond(5);
diamond(9);