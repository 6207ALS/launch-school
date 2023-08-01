// LS216 Practice Problems
// Squishing an Array

/*
https://edabit.com/challenge/8p7apuCwgSzWkaTC8

PROBLEM:
Write a function that squishes an array from the left or the right.

Input: Array, String
Output: Array

RULES:
	- Squishing from the left is to successively sum the first two elements of an
		array (shortening the array in the process).
	- Squishing from the right is to successively sum the last two elements of an 
		array.
	- Include the original array as the first element in either squish.
		- Pass the reference of original reference to output array
	- Return an empty array if the input is an empty array.

	- Assume arguments will always be an Array and a String (in that order).
		- String argument will always be either "left" or "right" (exactly).
		- Array elements will always be integers.
			- Integers can be positive, negative, or 0s.
				- Elements could be exclusively all positive, exclusively all negative, 
					or exclusively all 0s.
			- There can be duplicate values.
		- Array argument will never be sparse.
		- Array argument can be empty (return empty array)
			- Array argument could contain only 1 element.
		- Array argument should not be mutated.

	- Output array should sort the progression of the squished array from 
		left => right	
	
TEST CASES:
squish([1, 2, 3, 4, 5], "left")
// ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
[
	[1, 2, 3, 4, 5],
	[3, 3, 4, 5],
	[6, 4, 5]
	[10, 5]
	[15]
]

[1, 2, 3, 4, 5]
[3, 3, 4, 5]
[6, 4, 5]
[10, 5]
[15]

squish([1, 2, 3, 4, 5], "right")
// ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
[
	[1, 2, 3, 4, 5]
	[1, 2, 3, 9]
	[1, 2, 12]
	[1, 14]
	[15]
]

squish([1, 0, 2, -3], "left")
// ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

squish([1, 0, 2, -3], "right")
// ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

squish([1, 1, 2, 3, 4], "left")
// ➞ [[1, 1, 2, 3, 4], [2, 2, 3, 4], [4, 3, 4], [7, 4], [11]]

squish([], "left") // -> guard clause
// ➞ []

squish([1], "left")
// ➞ [[1]]

REQUIREMENTS:
	- Initialize an empty result array.
	- Push the original array to the result array.
	- While the last subarray in the result array has more than 1 element
		- Clone the last subarray of the result array
		- Break the subarray into two portions:
			- If "left", first portion is the first two elements of subarray and
				second portion is the rest of the subarray
				- reduce the first portion into the sum of its values.
			- If "right", second portion is the last two elements of subarray and
				first portion is the rest of the subarray.
				- reduce the second portion into the sum of its values.
		- Concatenate these two portions back together and push the resulting 
			subarray into result array.
	
DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	IF ARRAY_ARG IS EMPTY
		RETURN []

	LET RESULT = [ ARRAY_ARG ]

	WHILE LAST SUBARRAY IN RESULT HAS MORE THAN 1 ELEMENT
		LET NEXT_ARR = RESULT[LAST INDEX]
		IF (STRING_ARG IS "left") {
			LET FIRST_PORTION = FIRST TWO ELEMENTS OF NEXT_ARR
			LET SECOND_PORTION = NEXT_ARR SLICED FROM INDEX 2 TO END

			FIRST_PORTION = REDUCE ARR INTO SUM OF ALL VALUES
			NEXT_ARR = FIRST_PORTION CONCATENATED WITH SECOND_PORTION
		} ELSE {
			LET FIRST_PORTION = NEXT_ARR SLICED FROM INDEX 0 TO PENULTIMATE INDEX
			LET SECOND_PORTION = LAST TWO ELEMENTS OF NEXT_ARR

			SECOND_PORTION = REDUCE ARR INTO SUM OF ALL VALUES
			NEXT_ARR = FIRST_PORTION CONCATENATED WITH SECOND_PORTION
		}
		PUSH NEXT_ARR TO END OF RESULT
	
	RETURN RESULT;
*/

function squish(arr, direction) {
	if (arr.length === 0) return [];

	let result = [arr];

	while (result[result.length - 1].length > 1) {
		let nextArr = result[result.length - 1];
		if (direction === 'left') {
			let firstPortion = [nextArr.slice(0, 2).reduce((acc, val) => acc + val)];
			let secondPortion = nextArr.slice(2);
			result.push(firstPortion.concat(secondPortion));
		} else {
			let firstPortion = nextArr.slice(0, nextArr.length - 2);
			let secondPortion = [nextArr.slice(-2).reduce((acc, val) => acc + val)];
			result.push(firstPortion.concat(secondPortion));
		}
	}

	return result;
}

p = console.log;

p(squish([1, 2, 3, 4, 5], "left"))
// ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

p(squish([1, 2, 3, 4, 5], "right"))
// ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

p(squish([1, 0, 2, -3], "left"))
// ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

p(squish([1, 0, 2, -3], "right"))
// ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

p(squish([1, 1, 2, 3, 4], "left"))
// ➞ [[1, 1, 2, 3, 4], [2, 2, 3, 4], [4, 3, 4], [7, 4], [11]]

p(squish([], "left")) // -> guard clause
// ➞ []

p(squish([1], "left"))
// ➞ [[1]]