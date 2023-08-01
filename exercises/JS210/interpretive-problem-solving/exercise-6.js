// JS210 Exercises | Interpretive Problem Solving
// Exercise 6 - Seeing Stars

/*
PROBLEM:
Given n, and odd integer, implement a function that displays an 8-pointed 
within an n x n grid.

Input: Number (odd number)
Output: Star (multi-line string);

RULES:
  Explicit
    - n will always an odd integer, greater or equal to 7
    - star should be within an n x n grid
    - star should have 8 points
  Implicit
    - Assume that n will always be provided

TEST CASES:

star(7);
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11)

REQUIREMENTS:
Round down -> (n / 2) - 1

STAR(7)
leading-whitespace, in-between whitespace
0                  2  3
1                  1  3
2                  0  3
0                  0  7
2                  0  3
1                  1  3
0                  2  3

STAR(9)
0,                 3  3
1,                 2  3
2,                 1  3
3,                 0  3
0,                 0  9
3,                 0  3
2,                 1  3
1,                 2  3
0,                 3  3

STAR(11)
0, 4 3
1, 3 3
2, 2 3
3, 1 3
4, 0 3
0, 0 11
4, 0 3
3, 1 3
2, 2 3
1, 3 3
0, 4 3

DATA STRUCTURE:
ARRAY

ALGORITHM:

FUNCTION MAIN(n)
  LET MAX_WHITESPACE = ROUNDDOWN (n / 2) - 1
  LET LEADING_WS = DETERMINE_LEADING_WS(MAX_WHITESPACE)
  LET BETWEEN_WS = DETERMINE_BETWEEN_WS(MAX_WHITESPACE)
  LET NUM_STARS = DETERMINE_NUM_STARS(MAX_WHITESPACE)

  FOR EVERY INDEX IN NUM_STARS
    PRINT " " LEADING_WS NUMBER OF TIMES + STAR_LAYER

FUNCTION DETERMINE_LEADING_WS(MAX_WHITESPACE)
  RETURN ARRAY [0 - MAX_WHITESPACE] + [0] + [MAX_WHITESPACE - 0]

FUNCTION DETERMINE_BETWEEN_WS
  RETURN ARRAY [MAX_WHITESPACE - 0] + [0] + [0 - MAX_WHITESPACE]

FUNCTION DETERMINE_NUM_STARS
  FILL ARRAY WITH NUMBER 3, (ROUND DOWN(N / 2)) NUMBER OF TIMES
  +
  [N]
  +
  FILL ARRAY WITH NUMBER 3, (ROUND DOWN(N / 2)) NUMBER OF TIMES


FUNCTION RETURN STAR_LAYER (BETWEEN_WS, NUM_STARS)
  LET RESULT = ""
  FOR NUM_STARS - 1 TIMES
    PUSH "*" + " ".REPEAT(BETWEEN_WS) TO RESULT

  RETURN RESULT + "*"


STAR(7)
MAX_WHITESPACE = 2
LEADING_WHITESPACE = [0, 1, 2, 0, 2, 1, 0]
BETWEEN_WHITESPACE = [2, 1, 0, 0, 0, 1, 2]
NUM_STARS =          [3, 3, 3, 7, 3, 3, 3]

*/

function star(n) {
  let maxWhiteSpace = Math.floor((n / 2) - 1);
  let leadingWS = determineLeadingWS(maxWhiteSpace);
  let betweenWS = determineBetweenWS(maxWhiteSpace);
  let numStars = determineNumStars(n);

  for (let i = 0; i < numStars.length; i++) {
    console.log(`${" ".repeat(leadingWS[i])}${starLayer(betweenWS[i], numStars[i])}`);
  }
  console.log("\n");
}

function determineLeadingWS(max) {
  let arr = [];
  for (let i = 0; i <= max; i++) arr.push(i);
  return arr.concat([0], arr.slice().reverse());
}
function determineBetweenWS(max) {
  let arr = [];
  for (let i = 0; i <= max; i++) arr.push(i);
  return arr.slice().reverse().concat([0], arr);
}
function determineNumStars(n) {
  let arr = [];
  for (let i = 0; i < ((n / 2) - 1); i++) arr.push(3);
  return arr.concat([n], arr);
}
function starLayer(between, numStars) {
  let result = "";
  for (let i = 0; i < numStars - 1; i++) {
    result += ("*" + " ".repeat(between));
  }

  return result + "*";
}

star(7);
star(9);
star(11);