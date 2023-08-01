// LS216 Practice Problems
// Diagonal Matrices

/*
https://edabit.com/challenge/Lcgmf6CvjXnzFTScc

PROBLEM:
Write a function that diagonally orders numbers in a n x n matrix, depending on 
which of the four corners you originate from: upper-left (ul), upper-right (ur), 
lower-left (ll), lower-right (lr).

Input: Number, String
Output: Array

Rules:
	- Assume the arguments will always be (Number, String) in that order.
		- Assume Number will always be an integer greater than 0.
			- Number represents the dimensions of the matrix: N x N
		- Assume String will always be "ul", "ur", "ll", or "lr"
	- The starting corner's value should always be 0
		- Each "diagonal layer" is an increment of 1 (from the direction of corner).

TEST CASES:

diagonalize(3, "ul") ➞ [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]
offset: 2
[0, 1, 2]
[1, 2, 3]
[2, 3, 4]

diagonalize(4, "ur") ➞ [
  [3, 2, 1, 0],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [6, 5, 4, 3]
]
offset

[4, 2, 1, 0]

diagonalize(3, "ll") ➞ [
  [2, 3, 4],
  [1, 2, 3],
  [0, 1, 2]
]

diagonalize(5, "lr") ➞ [
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 0]
]


REQUIREMENTS:
	- every "corner" has a starting-offset of 0
		- offset increases by 1 for every additional row of the matrix

	- "ul":
		- for N subarrays
			- fill subarray with increments of 1 (starting from offset) N TIMES
			- push each increment to the END of subarray
			- push each subarray to the END of matrix

	- "ur"
		- for N subarrays
				- fill subarray with increments of 1 (starting from offset) N TIMES
				- push each increment to the BEGINNING of subarray
				- push each subarray to the END of matrix

	- "ll"
		- for N subarrays
				- fill subarray with increments of 1 (starting from offset) N TIMES
				- push each increment to the END of subarray
				- push each subarray to the BEGINNING of matrix

	- "lr"
		- for N subarrays
				- fill subarray with increments of 1 (starting from offset) N TIMES
				- push each increment to the BEGINNING of subarray
				- push each subarray to the BEGINNING of matrix

DATA STRUCTURE:
	ARRAY

ALGORITHM:

LET STARTING_OFFSET = 0
LET RESULT = [];

IF CORNER === "ul"
	FOR N TIMES
		LET CURRENT_VALUE = STARTING_OFFSET;
		LET ROW = []

		FOR N TIMES
			PUSH CURRENT_VALUE TO END OF ROW
			CURRENT_VALUE++

		PUSH ROW TO END OF RESULT
		STARTING_OFFSET++

IF CORNER === "ur"
	FOR N TIMES
		LET CURRENT_VALUE = STARTING_OFFSET;
		LET ROW = []

		FOR N TIMES
			PUSH CURRENT_VALUE TO BEGINNING OF ROW
			CURRENT_VALUE++

		PUSH ROW TO END OF RESULT
		STARTING_OFFSET++

IF CORNER === "ll"
	FOR N TIMES
		LET CURRENT_VALUE = STARTING_OFFSET;
		LET ROW = []

		FOR N TIMES
			PUSH CURRENT_VALUE TO END OF ROW
			CURRENT_VALUE++

		PUSH ROW TO BEGINNING OF RESULT
		STARTING_OFFSET++

IF CORNER === "lr"
	FOR N TIMES
		LET CURRENT_VALUE = STARTING_OFFSET;
		LET ROW = []

		FOR N TIMES
			PUSH CURRENT_VALUE TO BEGINNING OF ROW
			CURRENT_VALUE++

		PUSH ROW TO BEGINNING OF RESULT
		STARTING_OFFSET++

RETURN RESULT
*/

function diagonalize(n, corner) {
	let startingOffset = 0;
	let result = [];

	for (let i = 0; i < n; i++) {
		let currentValue = startingOffset;
		let row = [];

		for (let j = 0; j < n; j++) {
			if (corner === "ul" || corner === "ll") row.push(currentValue);
			if (corner === "ur" || corner === "lr") row.unshift(currentValue);
			currentValue++;  
		}

		if (corner === "ul" || corner === "ur") result.push(row);
		if (corner === "ll" || corner === "lr") result.unshift(row);
		startingOffset++;
	}

	return result;
}

p = console.log;

p(diagonalize(3, "ul"))
// ➞ [
//   [0, 1, 2],
//   [1, 2, 3],
//   [2, 3, 4]
// ]

p(diagonalize(4, "ur")) 
// ➞ [
//   [3, 2, 1, 0],
//   [4, 3, 2, 1],
//   [5, 4, 3, 2],
//   [6, 5, 4, 3]
// ]

p(diagonalize(3, "ll")) 
// ➞ [
//   [2, 3, 4],
//   [1, 2, 3],
//   [0, 1, 2]
// ]

p(diagonalize(5, "lr")) 
// ➞ [
//   [8, 7, 6, 5, 4],
//   [7, 6, 5, 4, 3],
//   [6, 5, 4, 3, 2],
//   [5, 4, 3, 2, 1],
//   [4, 3, 2, 1, 0]
// ]