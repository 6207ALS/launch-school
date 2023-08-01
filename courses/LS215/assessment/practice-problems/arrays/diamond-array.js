// LS216 Practice Problems
// Diamond Shaped Array

/*
https://edabit.com/challenge/BPjwuov9iAA6gosGH

PROBLEM:
Create a function that returns an array that expands by 1 from 1 to the value 
of the input, and then reduces back to 1.

Input: Number
Output: Array

RULES:
	- Items in the arrays will be the same as the length of the arrays.
	- Assume the argument will always be a single Integer.
		- If Integer is 0, return []
	- Output array's elements should be arrays.
		- Each array represents a "layer" of the diamond array.

TEST CASES:
diamondArrays(1) 
➞ [[1]]
1

diamondArrays(2) 
➞ [[1], [2, 2], [1]]
[
	[1]
	[2, 2]
	[1]
]

1, 2, 1

diamondArrays(5) 
// ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
1, 2, 3, 4, 5, 4, 3, 2, 1

diamondArrays(7) 
1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1


diamondArrays(0) 
// ➞ []

REQUIREMENTS:
	- Initialize empty result array.
	- Retrieve the values from 1 -> N -> 1
	- For each value of values, create a new Array with a length of "value" and
		"fill" the array with the number "value".

DATA STRUCTURE:
	Array

ALGORITHM:

DIAMOND_ARRAYS(N)
	LET RESULT = [];

	LET VALUES = RETRIEVE_VALUES(N)

	FOR EACH VALUE OF VALUES
		LET LAYER = NEW ARRAY WITH LENGTH OF "VALUE" FILLED WITH "VALUE"
		PUSH LAYER TO END OF RESULT

	RETURN RESULT


RETRIEVE_VALUES(N)
	LET FIRST_HALF = [];

	FOR I IN RANGE OF 1 -> (N - 1)
		PUSH I TO FIRST_HALF

	RETURN FIRST_HALF CONCATENATED WITH [N] AND (FIRST_HALF REVERSED)

*/

function diamondArrays(n) {
	if (n < 1) return [];
	let result = [];
	let values = retrieveValues(n);

	for (let value of values) {
		result.push(new Array(value).fill(value));
	}

	return result;
}

function retrieveValues(n) {
	let firstHalf = [];

	for (let i = 1; i <= (n - 1); i++) firstHalf.push(i);

	return firstHalf.concat([n], firstHalf.slice().reverse());
}

p = console.log;

p(diamondArrays(1)) 
// ➞ [[1]]

p(diamondArrays(2)) 
// ➞ [[1], [2, 2], [1]]

p(diamondArrays(5)) 
// ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

p(diamondArrays(7))

p(diamondArrays(0)) 
// ➞ []