// LS216 Practice Problems
// Free Range

/*
https://edabit.com/challenge/rdK3DgsTrx6jg97Ab

PROBLEM:
Create a function which converts an ordered number array into a array of ranges 
(represented as strings).

Input: Array
Output: Array

RULES:
	- Array argument is sorted (increasing order)
	- If a single number is the only number in the range, return the number as the 
		range.
	- Return an empty array if the given array is empty.
	- There will be no duplicate values in the array.
	- Output array's ranges should be sorted by ascending order (of the range)
	- To have a valid range, the numbers must be a sequence of consecutive integers.
	- Assume argument will always be a single Array.
	- Array can be mutated, if needed.
	- Array will never be sparse.
	- Array could contain only one element.
	- Elements will only be integers (0 or positive)

TEST CASES:
numbersToRanges([1, 2, 3, 4, 5]) // ➞ ["1-5"]

[
	[1, 2, 3, 4, 5] -> "1-5"
]

numbersToRanges([3, 4, 5, 10, 11, 12]) // ➞ ["3-5", "10-12"]

[
	[3, 4, 5]	
	[10, 11, 12]
]


numbersToRanges([1, 2, 3, 4, 99, 100]) // ➞ ["1-4", "99-100"]

[
	[1, 2, 3, 4]
	[99, 100]
]

numbersToRanges([1, 3, 4, 5, 6, 7, 8]) // ➞ ["1", "3-8"]

numbersToRanges([0, 1, 2, 5, 6, 7, 8]) // ➞ ["0-2", "5-8"]

numbersToRanges([1]) // ➞ ["1"]

numbersToRanges([]) // ➞ []


REQUIREMENTS:
	- initialize result array
	- initialize empty array (to contain range numbers)
	- loop until array argument is empty
		- remove first element of array argument and push to range array
		- if next value is +1 of removed element 
			- continue to next loop iteration
		- else,
			- push range array to result array
			- reset range array back to empty array
	- map each subarray in range array with the range
		- "[FIRST ELEMENT]-[LAST ELEMENT]"

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET START = 0;
	LET END = 0;

	WHILE (END < ARRAY_ARG LENGTH)


	RETURN RANGES
*/

function numbersToRanges(nums) {
	if (nums.length === 0) return [];
	let ranges = [];
	let range = []

	for (let i = 0; i < nums.length; i++) {
		let current = nums[i];
		let next = nums[i + 1];

		range.push(current);

		if (next === (current + 1) || i === (nums.length - 1)) {
			continue;
		} else {
			ranges.push(range.length === 1 ? `${range[0]}` : `${range[0]}-${range[range.length - 1]}`);
			range = [];
		}
	}

	ranges.push(range.length === 1 ? `${range[0]}` : `${range[0]}-${range[range.length - 1]}`);

	return ranges;
}

p = console.log;

p(numbersToRanges([1, 2, 3, 4, 5])) // ➞ ["1-5"]

p(numbersToRanges([3, 4, 5, 10, 11, 12])) // ➞ ["3-5", "10-12"]

p(numbersToRanges([1, 2, 3, 4, 99, 100])) // ➞ ["1-4", "99-100"]

p(numbersToRanges([1, 3, 4, 5, 6, 7, 8])) // ➞ ["1", "3-8"]

p(numbersToRanges([0, 1, 2, 5, 6, 7, 8])) // ➞ ["0-2", "5-8"]

p(numbersToRanges([1])) // ➞ ["1"]

p(numbersToRanges([])) // ➞ []
