// LS216 Practice Problems
// Spotlight Map

/*
https://edabit.com/challenge/ZkGDweXrsSaCfXGzq

PROBLEM:
Given a grid of numbers, return a grid of the Spotlight Sum of each number.

Input: Array
Output: Array

Rules:
	- The spotlight sum can be defined as the total of all numbers immediately
		surrounding the number on the grid, including the number in the total.
	- All numbers have a spotlight sum, including numbers on the edges.
	- All inputs will be a valid grid (all rows will have the same length).

	- Assume the argument will always be a 2D array (Array of Subarrays)
	- 2D array can be any dimension (N X M)
		- Smallest dimension being 1 X 1 (Array or Subarray will never be empty)
	- Assume the elements of the 2D array will always be integers 
		- Integers can be 0, positive, and negative.
	- The array argument, as well as its subarrays, will never be sparse.
	- The array argument, as well as its subarrays, can be mutated, if needed.

TEST CASES:
p(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])) 
// ➞ [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]

p(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
])) 
// ➞ [
//   [21, 31, 28, 24, 14],
//   [21, 31, 28, 24, 14]
// ]


p(spotlightMap([[3]])) 
// ➞ [[3]]

p(spotlightMap([
  [2, -6, 1, 3, 7],
  [8, 5, -9, 4, 0]
]))

REQUIREMENTS:
	- Initialize an empty result array
	- Iterate through each element of the grid.
	- For each row of grid, initialize an empty "row" array to record spotlight
		sums for each element of row.
	- For each element, record all surrounding values (including the element)
		- Calculate the spotlight sum and push sum to "row" array
	- After iterating through every element of row, push "row" array to result array

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET RESULT = []

	FOR EACH SUBARRAY IN ARRAY ARGUMENT
		LET SUMS = [];
		FOR EACH ELEMENT IN SUBARRAY
			LET SURROUNDING_VALUES = []
			PUSH CURRENT ELEMENT TO SURROUNDING_VALUES
			PUSH TOP NEIGHBOR TO SURROUNDING_VALUES
			PUSH TOP-RIGHT NEIGHBOR TO SURROUNDING_VALUES
			PUSH RIGHT NEIGHBOR TO SURROUNDING_VALUES
			PUSH BOTTOM-RIGHT NEIGHBOR TO SURROUNDING_VALUES
			PUSH BOTTOM NEIGHBOR TO SURROUNDING_VALUES
			PUSH BOTTOM-LEFT NEIGHBOR TO SURROUNDING_VALUES
			PUSH LEFT NEIGHBOR TO SURROUNDING_VALUES
			PUSH TOP-LEFT NEIGHBOR TO SURROUNDING_VALUES

			REMOVE ANY UNDEFINED VALUES IN SURROUNDING_VALUES
			LET SPOTLIGHT_SUM = SUM OF SURROUNDING_VALUES
			PUSH SPOTLIGHT_SUM TO SUMS
		
		PUSH SUMS TO RESULT

	RETURN RESULT
*/

function spotlightMap(map) {
	let result = [];
	for (let row = 0; row < map.length; row++) {
		let spotlightRow = [];
		for (let column = 0; column < map[0].length; column++) {
			let spotlightValues = [];

			spotlightValues.push(map[row][column]);
			spotlightValues.push((map[row - 1] || [])[column]);
			spotlightValues.push((map[row - 1] || [])[column + 1]);
			spotlightValues.push((map[row] || [])[column + 1]);
			spotlightValues.push((map[row + 1] || [])[column + 1]);
			spotlightValues.push((map[row + 1] || [])[column]);
			spotlightValues.push((map[row + 1] || [])[column - 1]);
			spotlightValues.push((map[row] || [])[column - 1]);
			spotlightValues.push((map[row - 1] || [])[column - 1]);
			
			spotlightValues = spotlightValues.filter(value => value !== undefined);
			let spotlightSum = spotlightValues.reduce((acc, val) => acc + val, 0);
			spotlightRow.push(spotlightSum);
		}

		result.push(spotlightRow);
	}

	return result;
}

p = console.log;

p(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])) 
// ➞ [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]

p(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
])) 
// ➞ [
//   [21, 31, 28, 24, 14],
//   [21, 31, 28, 24, 14]
// ]


p(spotlightMap([[3]])) 
// ➞ [[3]]

p(spotlightMap([
  [2, -6, 1, 3, 7],
  [8, 5, -9, 4, 0]
])) 