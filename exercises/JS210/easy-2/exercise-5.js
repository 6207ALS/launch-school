// JS210 Exercises | Easy 2
// Exercise 5 - Right Triangles

/*
PROBLEM:
Given n, an integer, log a right triangle to the console whose sides each have n
stars.

Input: Number
Output: String

Rules:
  - The hypotenuse of the triangle should have one end at the lower-left side
    and and other end at the upper-right (triangle should point left)
  - Each side should be N stars long
  - Assume argument will be a positive integer.

TEST CASES:
triangle(5);

    *
   **
  ***
 ****
*****


triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

REQUIREMENTS:
  - Number of layers = N
  - Number of whitespace are decreasing
    - Starting number of whitespace = N - 1
    - Decrement by 1 every layer
  - Number of stars are increasing
    - Starting number of stars = 1
    - Increment by 1 until num of stars = N

DATA STRUCTURE:
  STRINGS

ALGORITHM:
  
  FOR 1 TO N
    LET NUM_WHITESPACE = N - I
    LET NUM_STARS = I

    LOG " " (REPEAT (NUM_WHITESPACE) TIME) + "*" (REPEAT(NUM_STARS) TIMESS
*/

function triangle(length) {
  console.log("");
  for (let i = 1; i <= length; i++) {
    let numWhiteSpace = length - i;
    let numStars = i;

    console.log(`${" ".repeat(numWhiteSpace)}${"*".repeat(numStars)}`);
  }
}

triangle(5);
triangle(9);