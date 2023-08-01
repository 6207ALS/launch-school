// LS216 Practice Problems
// Split the List into Groups of Consecutive Numbers

/*
https://edabit.com/challenge/Hx5ccS4DfGPtXk4e3

PROBLEM:
The function is given two parameters: an array of integers and the group’s 
length. Return a Boolean indicating if it is possible to split all numbers from 
the array into groups of the specified length such that there are 
consecutive numbers in each group.

Input: Array, Number (N)
Output: Boolean

RULES:
	- If the array length is not divisible by the group’s length, return false.
		- The array should be broken down into groups, all with a length of N
	- If N is 1, return true.
		- It is always possible to create groups of length 1.

	- Assume the arguments will always be an Array and a Number (in that order).
		- The Number argument will always be a positive Integer [1, Length of Array - 1].
		- Assume the Array argument will only contain positive Integers as elements.
		- The array will never be sparse.
		- The array can be mutated, if needed.
		- The array can contain duplicate values.
		- Minimum length of array will be 1 element.
	
TEST CASES:

consecutiveNums([1, 3, 5], 1) ➞ true
// It is always possible to create groups of length 1.

consecutiveNums([5, 6, 3, 4], 2) ➞ true
// Two groups of length 2: [3, 4], [5, 6]

consecutiveNums([1, 3, 4, 5], 2) ➞ false
// It is possible to make one group of length 2, but not a second one.
[1, ]

consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// [1, 2, 3], [2, 3, 4], [6, 7, 8]


consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false
// The list length is not divisible by the group’s length.

REQUIREMENTS:
	- Sort array argument by ascending order.
	- Initialize empty result array to hold all groups.
	- NUM_GROUPS: Calculate how many groups there should be: (LENGTH OF ARRAY / N)
	- Repeat NUM_GROUPS times
		- Initialize array, representing a group
			- It should remove and store the first element of array argument.
		- Until the group array is a length of (N) elements,
			- Search and remove the next increment value for the group in the array argument.
				- If no value exists, return FALSE
				- Else, push the value to the group array
		- Push the group to the empty result array.
	- Return true, if loop never returns false

DATA STRUCTURE:
	- ARRAY: Splice, Sort

ALGORITHM:
	IF REMAINDER OF (ARR_ARG LENGTH / 4) IS NOT 0
		RETURN FALSE

	ARRAY_ARG = ARRAY_ARG SORTED BY ASCENDING ORDER
	LET RESULT_ARRAY = []
	LET NUM_OF_GROUPS = LENGTH OF ARRAY_ARG / N

	FOR NUM_OF_GROUPS TIMES
		LET GROUP = [] 
		REMOVE FIRST ELEMENT OF ARRAY_ARG AND PUSH TO GROUP

		WHILE LENGTH OF GROUP < N ELEMENTS
			LET LAST_VAL = VALUE OF LAST ELEMENT IN GROUP
			LET NEXT_VAL = FIND (LAST_VAL + 1) IN ARRAY_ARG

			IF NEXT_VAL DOESN'T EXIST
				RETURN FALSE
			ELSE
				REMOVE NEXT_VAL FROM ARRAY_ARG AND PUSH IT TO GROUP

		PUSH GROUP TO RESULT_ARRAY

	RETURN TRUE
*/

function consecutiveNums(nums, groupLength) {
	if (nums.length % groupLength !== 0) return false;

	nums = nums.sort((a, b) => a - b);
	let result = [];
	let numOfGroups = nums.length / groupLength;

	for (let i = 0; i < numOfGroups; i++) {
		let group = [];
		group.push(nums.shift());
		
		while (group.length < groupLength) {
			let lastVal = group[group.length - 1];
			let nextVal = lastVal + 1;

			if (!nums.includes(nextVal)) {
				return false;
			} else {
				nums.splice(nums.indexOf(nextVal), 1);
				group.push(nextVal);
			}
		}

		result.push(group);
	}

	return true;
}

p = console.log;

p(consecutiveNums([1, 3, 5], 1)) // ➞ true
// It is always possible to create groups of length 1.

p(consecutiveNums([5, 6, 3, 4], 2)) // ➞ true
// Two groups of length 2: [3, 4], [5, 6]

p(consecutiveNums([1, 3, 4, 5], 2)) // ➞ false
// It is possible to make one group of length 2, but not a second one.

p(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)) // ➞ true
// [1, 2, 3], [2, 3, 4], [6, 7, 8]

p(consecutiveNums([1, 2, 3, 4, 5], 4)) // ➞ false
// The list length is not divisible by the group’s length.