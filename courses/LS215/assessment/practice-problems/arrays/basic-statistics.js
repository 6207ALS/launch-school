// LS216 Practice Problems
// Basic Statistics: Mode

/*
https://edabit.com/challenge/biyHa34iTd58LfFFb

PROBLEM:
The mode of a group of numbers is the value (or values) that occur most often 
(values have to occur more than once). Given a sorted array of numbers, return 
an array of all modes in ascending order.

Input: Array
Output: Array

Rules:
	- Array of modes must be sorted in ascending order.
	- Array will always have at least one mode.
		- Thus, array will always contain duplicate values.
	- Multiple values can be the mode
		- Such values equally occur the most often.
	- Assume argument will always be a single array.
		- Assume array will only contain Integers as elements.
			- Integers can be 0, negative, or positive.
		- Length of array will always be at least 2 integers.

TEST CASES:
mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) 
// ➞ [6]

mode([4, 5, -6, -6, -6, 7, 7, 9, 10]) 
// ➞ [6]

mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) 
// ➞ [5, 8, 9]

mode([4, 0, 0, 6, 7, 8, 8, 9, 9]) 
// ➞ [0, 8, 9]

mode([1, 2, 2, 3, 6, 6, 7, 9]) 
// ➞ [2, 6]

mode([2, 2]) 
// ➞ [2]

REQUIREMENTS:
	- Identify all unique values in array
	- For each unique value, count how many times they appear in array
		- The highest count is the mode of the array.
	- Filter unique values with values that have the same count as the highest_count
	- Sort the filtered array in increasing order.

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET UNIQUE_VALUES = FILTER ARRAY WITH UNIQUE VALUES
	LET MODES = [];
	
	LET COUNTS = MAP UNIQUE_VALUES WITH COUNT OF OCCURRENCES IN ARRAY ARGUMENT
	LET MODE = HIGHEST VALUE IN COUNTS

	FOR INDEX OF COUNTS
		IF COUNTS[INDEX] === MODE
			PUSH UNIQUE_VALUES[INDEX] TO MODES

	RETURN MODES SORTED BY ASCENDING ORDER
*/

function mode(nums) {
	let uniqueValues = nums.filter((num, index) => nums.indexOf(num) === index);
	let modes = [];

	let counts = uniqueValues.map(value => nums.filter(num => num === value).length);
	let mode = Math.max(...counts);

	for (let i = 0; i < counts.length; i++) {
		if (counts[i] === mode) modes.push(uniqueValues[i]);
	}

	return modes.sort((a, b) => a - b);
}

p = console.log;

p(mode([4, 5, 6, 6, 6, 7, 7, 9, 10])) 
// ➞ [6]

p(mode([4, 5, -6, -6, -6, 7, 7, 9, 10])) 
// ➞ [-6]

p(mode([4, 5, 5, 6, 7, 8, 8, 9, 9])) 
// ➞ [5, 8, 9]

p(mode([4, 0, 0, 6, 7, 8, 8, 9, 9])) 
// ➞ [0, 8, 9]

p(mode([1, 2, 2, 3, 6, 6, 7, 9])) 
// ➞ [2, 6]

p(mode([2, 2])) 
// ➞ [2]