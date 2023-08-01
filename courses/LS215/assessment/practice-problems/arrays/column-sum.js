// LS216 Practice Problems
// Column With Maximum Sum

/*
PROBLEM:
Given an array of numbers and a value for n, split the numbers into n-sized 
groups. Stack the groups on top of each other (see below), return the column 
number that has the greatest sum.

Input: Array, Number
Output: Number

Rules:
	- If two or more columns have the same sum, return the one with the smallest 
		column number.
	- (Array, Number) will always divide into equal-length groups.
		- Divide array, maintaining their order.
	- Column number starts from 1 (not 0)
	
	- Assume that argument will always be an Array and a Number (in that order)
		- Assume Number is always a positive integer.
			- If Number argument is 1, return 1.
		- Number will always divide Array into equal groups.
		- Assume elements of Array will always be integers.
			- Integers can be positive, negative, or 0.
		- Array argument will never be sparse.
		- Array argument can be mutated, if needed.
		- Array argument will never be an empty array.

		
TEST CASES:
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)


nums = [4, 14, 12, 7] 
n = 1

[
	[4],
	[14],
	[12],
	[1]
]

// 1 (column)
// 31

nums = [-4, 14, 12, 7] 
n = 2

[
	[-4, 14],
	[12, 7],
]

// 1,  2  (column)
// 8   21


nums = [-4, -10, -2, -5] 
n = 2

[
	[-4, -10],
	[-2, -5 ],
]

// 1,  2  (column)
// -6  -15


nums = [1] 
n = 1

[
	[1],
]

// 1, (column)
// 1

REQUIREMENTS:
	- Initialize empty result array to contain stack of groups
	- Determine the numberOfGroups needed for stack
		- Length of Nums Array / N
	- For numberOfGroups times
		- initialize empty array for group
		- remove first element in "Nums Array" N times
		- push removed element to group array
	- Push each group array to stack array
	- Initialize array to contain all sums
	- Iterate through each column of stack, recording values in the stack
		- Calculate the sum of the values
		- Push the sum to sum array
	- Determine the highest value in sum array
	- Return index of highest value in sum array + 1

DATA STRUCTURE:
	Array (of Subarrays)

ALGORITHM:
	LET STACK = [];
	LET NUM_OF_GROUPS = LENGTH OF ARRAY ARG / N

	FOR NUM_OF_GROUPS TIMES
		LET GROUP = []
		FOR (N) TIMES
			REMOVE FIRST ELEMENT IN ARRAY ARG
			PUSH ELEMENT TO GROUP
		PUSH GROUP ARRAY TO STACK
	
	LET COLUMN_SUMS = []

	FOR I IN RANGE 0 => (N - 1)
		LET COLUMN_VALUES = []
		FOR EACH SUBARRAY IN STACK ARRAY
			PUSH ELEMENT AT CURRENT INDEX TO COLUMN_VALUES
		CALCULATE SUM OF VALUES OF COLUMN_VALUES
		PUSH SUM TO COLUMN_SUMS

	LET HIGHEST_VALUE = MAX VALUE IN COLUMN_SUMS

	RETURN INDEX OF "HIGHEST_VALUE" IN COLUMN_SUMS + 1

MORE EFFICIENT ALGORITHM:
	ITERATE THROUGH NUMS ARRAYS EVERY NTH ELEMENT (WITH OFFSETS OF 0 TO N - 1)
	[4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
	 4,            14,            7,		 				 -> Sum is 25
	    14,            16,           16,  			 -> Sum is 46
	        12,            5,            11, 		 -> Sum is 28
	            7,            13,            19, -> Sum is 39

	EACH OFFSET REPRESENTS THE COLUMN NUMBER
	AND THE ITERATED ELEMENTS REPRESENTS THE COLUMN'S VALUES
	DETERMINE WHICH COLUMN HAS THE HIGHEST SUM OF VALUES
*/

function colWithMaxSum(nums, n) {
	let stack = [];
	let numOfGroups = nums.length / n;

	for (let i = 0; i < numOfGroups; i++) {
		let group = [];
		for (let j = 0; j < n; j++) {
			group.push(nums.shift());
		}
		stack.push(group);
	}

	let columnSums = [];

	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = 0; j < numOfGroups; j++) {
			sum += stack[j][i];
		}
		columnSums.push(sum);
	}

	let highestValue = Math.max(...columnSums);
	return columnSums.indexOf(highestValue) + 1;
}

p = console.log;

nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4

p(colWithMaxSum(nums, n))

nums = [4, 14, 12, 7] 
n = 1

p(colWithMaxSum(nums, n))

nums = [-4, 14, 12, 7] 
n = 2

p(colWithMaxSum(nums, n))

nums = [-4, -10, -2, -5] 
n = 2

p(colWithMaxSum(nums, n))

nums = [1] 
n = 1

p(colWithMaxSum(nums, n))