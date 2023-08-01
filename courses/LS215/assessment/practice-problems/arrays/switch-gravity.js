// LS216 Practice Problems
// Switch on the Gravity

/*
https://edabit.com/challenge/HDpN8a7SunaAY94NX

PROBLEM:
Given a 2D array of some suspended blocks (represented as hastags), return 
another 2D array which shows the end result once gravity is switched on.

Input: Array
Output: Array

Rules:
	- Gravity switched on: all blocks fall to the bottom of 2D array.
		- All blocks in their respective columns are stacked on top of each other.
	- 2D array could be of various dimensions: 2X3, 2X4, 5X4, etc.
		- Smallest possible dimension being: 1 x 1.
	- Each block falls individually, meaning there are no rigid objects.
		- In other words, all blocks fall down to the bottom, stacked on top of
			each other.
	- Assume the argument will always be a single 2D array.
		- Array argument will only contain arrays as elements
			- Array argument will always contain at least 1 subarray.
		- Subarrays will always contain either "-" or "#" characters.
			- Subarrays will always contain at least 1 element.
	- None of the arrays will ever be sparse.
	- Any non-primitive data types (arrays) can be mutated, if needed.
	- There can be arguments where all blocks are already at the bottom of 2D
		array.
	- There can be arguments where there are only "-" characters.
	- There can be arguments where there are only "#" characters.

TEST CASES:
/// General example
switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]

[
	[ "-", "-", "-", "-"]
	[ "-", "-", "-", "-"]
	[ "-", "-", "-", "-"]
	[ "-", "-", "-", "-"]
]

// Blocks stacking on top of each other
switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

[
	["-", "-", "-", "-"]
	["-", "-", "#", "-"]
	["-", "#", "#", "-"]
]


// Various dimensions of 2D array 
switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]

[
	[ "-", "-", "-", "-", "-", "-"]
	[ "-", "-", "-", "-", "-", "-"]
	[ "-", "#", "-", "#", "#", "-"]
	[ "#", "#", "#", "#", "#", "-"]
]

// Blocks are already at bottom
switchGravityOn([
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]

[
	[ "-", "-", "-", "-", "-", "-"]
	[ "-", "-", "-", "-", "-", "-"]
	[ "-", "#", "-", "#", "#", "-"]
	[ "#", "#", "#", "#", "#", "-"]
]


// Characters are only "-" character
switchGravityOn([
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
]

[
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
]

// Characters are only "#" characters
switchGravityOn([
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
]) ➞ [
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
]

[
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
]

// Smallest possible dimension: 1 x 1
switchGravityOn([
  ["#"]
] ➞ [
  ["#"]
]

REQUIREMENTS:
	- Create a clone of the 2D array argument
		- Every element in the 2D array should be "-"
	- For each column of the 2D array argument, count how many "#" characters
		there are.
		- In the corresponding column of the clone 2D array,
		- Going from bottom-up,
		- Replace "count" number of elements with "#" character
	- Return clone 2D array

DATA STRUCTURE:
	- Array

ALGORITHM:
	LET HEIGHT = LENGTH OF ARRAY ARGUMENT
	LET WIDTH = LENGTH OF FIRST SUBARRAY IN ARRAY ARGUMENT

	LET CLONE = [];

	FOR (HEIGHT) NUMBER OF TIMES
		LET ROW = ARRAY WITH A LENGTH OF "WIDTH"
		FILL ROW WITH "-" AS ELEMENTS
		PUSH ROW TO CLONE

	FOR WIDTH NUMBER OF TIMES (i)
		LET NUM_HASHTAGS = 0;
		FOR EACH SUBARRAY OF 2D ARRAY (j)
			IF SUBARRAY[i] IS A "#"
				NUM_HASHTAGS++

		FOR EACH SUBARRAY OF CLONE 2D ARRAY (BOTTOM UP) (NUM_HASHTAG TIMES)
			SUBARRAY[i] = "#"

	RETURN CLONE;
*/

function switchGravityOn(arr) {
	let height = arr.length;
	let width = arr[0].length;

	let clone = makeClone(height, width);
	
	for (let i = 0; i < width; i++) {
		let numHashtags = 0;

		for (let j = 0; j < height; j++) {
			if (arr[j][i] === "#") numHashtags++;
		}
		
		for (let j = height - 1; j >= (height - numHashtags); j--) {
			clone[j][i] = "#";
		}
	}

	return clone;
}

function makeClone(height, width) {
	let clone = [];
	for (let i = 0; i < height; i++) {
		let row = new Array(width).fill("-");
		clone.push(row);
	}
	return clone;
}

p = console.log;

/// General example
p(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) )
// ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "#", "#", "-"]
// ]

// Blocks stacking on top of each other
p(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
])) 
// ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "#", "#", "-"]
// ]


// Various dimensions of 2D array 
p(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) )
// ➞ [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "#", "-", "#", "#", "-"],
//   ["#", "#", "#", "#", "#", "-"]
// ]

// Blocks are already at bottom
p(switchGravityOn([
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]) )
// ➞ [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "#", "-", "#", "#", "-"],
//   ["#", "#", "#", "#", "#", "-"]
// ]


// Characters are only "-" character
p(switchGravityOn([
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
]) )
// ➞ [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
// ]


// Characters are only "#" characters
p(switchGravityOn([
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
]) )
// ➞ [
//   ["#", "#", "#", "#", "#", "#"],
//   ["#", "#", "#", "#", "#", "#"],
// ]\

// Smallest possible dimension: 1 x 1
p(switchGravityOn([
  ["#"]
]))
// ➞ [
//   ["#"]
// ]