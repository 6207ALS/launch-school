// LS216 Practice Problems
// Find the Lowest Neighbor

/*
https://edabit.com/challenge/pgqyeEyTtzJL9L8Nq

PROBLEM:
Create a function that returns the lowest neighbor of a given (x, y) coordinate 
element in a 2D array.

Input: Array, Number(x), Number(y)
Output: Number

Rules:
	- Array argument will be a 2D array holding integer values and will always be 
		symmetrical in size (e.g. 2x2, 3x3, 4x4).
		- Smallest possible dimension of Array will be 1x1.
		- Assume Array argument will always be 2D array
		- Arrays/Subarrays will never be sparse.
		- "x" represents the row coordinate, while "y" represents the column 
			coordinate.
		- Elements of 2D array can be 0, positive integers, and negative integers.
		- Array can contain duplicate values.
	
	- Second argument will always represent "x"
	- Third argument will always represent "y"
	- (x, y) will always be integers greater than 0.
	- "Lowest neighbor": smallest neighbor number that is less than the 
											 coordinate element's value.
	- If there isn't any lower neighbors, return the value of the given 
		(x, y) coordinate.
	- You will have to check the IMMEDIATE horizontal, vertical and diagonal 
		neighbor elements.

	- Assume the arguments will be an Array, Number, and Number (in that order)
	- Assume (x, y) will always be a valid coordinate within 2D Array argument.
	- Array argument can be mutated, if needed.
	- (x, y) represents the INDEX of 2D array (0-based indexing)

TEST CASES:
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1

[1, 2, 3, 4, 6, 7, 9]
5

// [
//   [1, 2, 3]
//   [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
//   [7, 8, 9]
// ]

lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1

[8, -1, 0]
9

// [
//   [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
//   [0, -1, -3]
//   [-5, -9, 54]
// ]

lowestElement([
	[ 3, 4,  5],
  [ 6, 2,  7],
  [ 8, 9, 12]
], 1, 1) 
// -> 2

lowestElement([
	[ -1],
], 0, 0) 
// -> -1

REQUIREMENTS:
	- Determine value at provided coordinate
	- Keep record of all surrounding elements
	- Determine smallest surrounding element that is less than coordinate element
		- If none of surrounding elements are less than coordinate element, return
			coordinate element.

DATA STRUCTURE:
	- ARRAY

ALGORITHM:

	LET COORDINATE = ARR[x][y]
	LET SURROUNDING_ELEMENTS = [];

	PUSH ARR[x - 1][y] TO SURROUNDING ELEMENTS // TOP ELEMENT
	PUSH ARR[x - 1][y + 1] TO SURROUNDING ELEMENTS // TOP-RIGHT ELEMENT
	PUSH ARR[x][y + 1] TO SURROUNDING ELEMENTS // RIGHT ELEMENT
	PUSH ARR[x + 1][y + 1] TO SURROUNDING ELEMENTS // BOTTOM-RIGHT ELEMENT
	PUSH ARR[x + 1][y] TO SURROUNDING ELEMENTS // BOTTOM ELEMENT
	PUSH ARR[x + 1][y - 1] TO SURROUNDING ELEMENTS // BOTTOM-LEFT ELEMENT
	PUSH ARR[x][y - 1] TO SURROUNDING ELEMENTS // LEFT ELEMENT
	PUSH ARR[x - 1][y - 1] TO SURROUNDING ELEMENTS // TOP-LEFT ELEMENT
	
	FILTER OUT UNDEFINED VALUES IN SURROUNDING ELEMENTS
	IF EVERY VALUE IN SURROUNDING ELEMENTS IS LESS THAN COORDINATE VALUE
		RETURN COORDINATE VALUE
	ELSE
		RETURN SMALLEST VALUE IN SURROUNDING_ELEMENTS	

*/

function lowestElement(arr, x, y) {
	let coordinate = arr[x][y];
	let surroundingNeighbors = [];

	surroundingNeighbors.push((arr[x - 1] || [])[y]);
	surroundingNeighbors.push((arr[x - 1] || [])[y + 1]);
	surroundingNeighbors.push((arr[x] || [])[y + 1]);
	surroundingNeighbors.push((arr[x + 1] || [])[y + 1]);
	surroundingNeighbors.push((arr[x + 1] || [])[y]);
	surroundingNeighbors.push((arr[x + 1] || [])[y - 1]);
	surroundingNeighbors.push((arr[x] || [])[y - 1]);
	surroundingNeighbors.push((arr[x - 1] || [])[y - 1]);
	
	surroundingNeighbors = surroundingNeighbors.filter(value => value !== undefined);
	if (surroundingNeighbors.every(value => value >= coordinate)) {
		return coordinate;
	} else {
		return Math.min(...surroundingNeighbors);
	}

}

p = console.log;

p(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) )
// ➞ 1

// [
//   [1, 2, 3]
//   [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
//   [7, 8, 9]
// ]

p(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)) 
// ➞ -1

// [
//   [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
//   [0, -1, -3]
//   [-5, -9, 54]
// ]

p(lowestElement([
	[ 3, 4,  5],
  [ 6, 2,  7],
  [ 8, 9, 12]
], 1, 1) )
// -> 2

p(lowestElement([
	[ -1],
], 0, 0)) 
// -> -1