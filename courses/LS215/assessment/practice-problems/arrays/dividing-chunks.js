// LS216 Practice Problems
// Dividing into Chunks of Maximum Sum N

/*
https://edabit.com/challenge/RaxaX4wmKKCsrzKwJ

PROBLEM:
Write a function that divides an array into chunks such that the sum of each 
chunk is <= n.

Input: Array, Number (n)
Output: Array

RULES:
	- Each chunk is <= n.
	- A chunk is a series of consecutive elements in the array.
	- The max of the array will always be smaller than or equal to n.

	- Assume the arguments will always be a Array and a Number (in that order).
		- Assume the Number argument will always be a Integer (positive or 0).
		- Array argument will only contain Integers as elements.
			- Integers can be postive, negative, or 0.
		- Array will never be empty.
		- Array will never be sparse
		- Array can be mutated, if needed.
		- Array can contain duplicate Integers.
	- Array will never contain values such that every value cannot be in a chunk.

TEST CASES:

divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
// [[1, 2], [3], [4, 1, 0], [2, 2]]

[
	[1, 2]
]
start: 2
end (excluded): 2
next (excluded): 3

divide([1, 2, -1, -2], 0)
// [[1, 2, -1, -2]]

divide([1, 0, 1, 1, -1, 0, 0], 1)
// [[1, 0], [1], [1, -1, 0, 0]]

divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
// [[2, 1, 0, -1, 0, 0], [2, 1], [3]]


REQUIREMENTS:
	- Initialize empty array to store chunks
	- Initialize start and end of "slider window" with both value of 0
	- repeat loop until end reaches last index of array
		- initialize "next" with a value of (end + 1)
		- slice arr from (start, next)
		- if sum of values in sliced array is greater than N
			- slice array from (start, end)
			- push sliced array to chunks array
			- reassign start to current value of end
		- else, increment end by 1

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET CHUNKS = []
	LET START = 0;
	LET END = 0;

	WHILE (END < LENGTH OF ARR_ARG)
		LET NEXT = END + 1
		LET CURRENT_CHUNK = SLICE ARR_ARG FROM [START, END)
		LET NEXT_CHUNK = SLICE ARR_ARG FROM [START, NEXT)
		IF SUM OF NEXT_CHUNK VALUES IS > THAN N
			PUSH CURRENT_CHUNK TO CHUNKS
			START = END
		ELSE
			END++
	
	RETURN CHUNKS
*/

function divide(nums, n) {
	let chunks = [];
	let start = 0;
	let end = 0;

	while (end < nums.length) {
		let next = end + 1;
		let currentChunk = nums.slice(start, end);
		let nextChunk = nums.slice(start, next);
		let nextSum = nextChunk.reduce((acc, val) => acc + val, 0);
		if (nextSum > n) {
			chunks.push(currentChunk);
			start = end;
		} else {
			end++;
		}
	}

	chunks.push(nums.slice(start, end));

	return chunks;
}

p = console.log;

// p(divide([1, 2, 3, 4, 1, 0, 2, 2], 5))
// // ➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

// p(divide([1, 0, 1, 1, -1, 0, 0], 1))
// // ➞ [[1, 0], [1], [1, -1, 0, 0]]

// p(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3))
// // ➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]

// p(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 4));

p(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 5));
// p(divide(), );
// p(divide(), );

