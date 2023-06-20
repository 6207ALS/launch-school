// LS215: A General Problem Solving Approach
// Understanding the Problem and Writing Test Cases - Diamonds

/*
PROBLEM:
Given n, an odd integer, write a function that displays a four-point diamond
in an n x x grid.

EXAMPLES:
diamond(1)
*

diamond(3);
 *
***
 *

diamond(5);
  *
 ***
*****
 ***
  *

diamond(9);
4 1
3 3
2 5
1 7

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
  - each layer increments/decrements by 2
    - odd number of astericks
  - widest part of diamond (center) is n
  - total number of layers is n
  - number of layers each side is Math.floor(n / 2)


DATA STRUCTURE:
  for-loop

ALGORITHM:

DIAMOND(N)
  FOR (N TIMES)
    FUNCTION (DISPLAY TOP PORTION)
    FUNCTION (DISPLAY MIDDLE LAYER)
    FUNCTION (DISPLAY BOTTOM PORTION)


TOP_PORTION(N)
  LAYERS = (ROUND-DOWN(N / 2) - 1)
  FOR (I = 0; I < LAYERS; I++)
    LOG (LAYERS - (I)) SPACES
    LOG (1 + (2 * I)) ASTERICKS

MIDDLE_LAYER(N)
  LOG N ASTERICKS

BOTTOM_PORTION(N)
  LAYERS = (ROUND-DOWN(N / 2) - 1)
  FOR (I = LAYERS - 1; I >= 0; I--)
    LOG (LAYERS - I) SPACES
    LOG (1 + (2 * I)) ASTERICKS

*/

function diamond(n) {
  topDiamond(n);
  middleDiamond(n);
  bottomDiamond(n);
}

function topDiamond(n) {
  let numLayers = Math.floor(n / 2);

  for (let i = 0; i < numLayers; i++) {
    console.log(`${" ".repeat(numLayers - i)}${"*".repeat(1 + (2 * i))}`);
  }
}

function middleDiamond(n) {
  console.log("*".repeat(n));
}

function bottomDiamond(n) {
  let numLayers = Math.floor(n / 2);

  for (let i = numLayers - 1; i >= 0; i--) {
    console.log(`${" ".repeat(numLayers - i)}${"*".repeat(1 + (2 * i))}`);
  }
}

diamond(23);