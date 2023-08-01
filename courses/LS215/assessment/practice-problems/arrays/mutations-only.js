// LS216 Practice Problems
// Mutations Only Zero to End

/*
https://edabit.com/challenge/JJtafXGmNegpQMp6p

PROBLEM:
Write a function that moves all the zeroes to the end of an array. 

Input: Array
Output: Array (same)

Rules:
	- The function should return the original array argument.
	- The relative order of the non-zero elements should remain the same.
	- Assume the argument will always be a single array.
	- Assume the array will only contain Integers as elements.
		- Integers can be positive or 0.
	- You must mutate the original array.
	- The array may contain only zeros.
	- The array may only contain positive integers.
	- There can be duplicate non-zero integers.

TEST CASES:
zeroesToEnd([1, 2, 4, 5, 0, 0, 0]) // ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) // ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) // ➞ [4, 4, 5]

zeroesToEnd([0, 0]) // ➞ [0, 0]


REQUIREMENTS:
	- Determine the count of non-zero integers in array.
	- From indexes 0 -> count - 1
		- check value at current index
		- if value is 0, splice the element and push it to end of array
			- do not increment index
		- if value is non-zero, increment index

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET COUNT = LENGTH OF (FILTER ARR WITH ONLY NON-ZERO INTEGERS)

	FOR I IN RANGE OF 0 -> (COUNT - 1)
		CURRENT_VAL = ARR[i]
		IF CURRENT_VAL IS 0
			SPLICE ELEMENT AT CURRENT INDEX
			PUSH SPLICED ELEMENT TO END OF ARRAY
		ELSE
			INDEX++

	RETURN ARR
*/

function zeroesToEnd(arr) {
	let count = arr.filter(val => val !== 0).length;

	for (let i = 0; i < count;) {
		let value = arr[i];
		if (value === 0) {
			arr.push(arr.splice(i, 1)[0]);
		} else {
			i++;
		}
	}

	return arr;
}

p = console.log;

p(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])) // ➞ [1, 2, 4, 5, 0, 0, 0]

p(zeroesToEnd([0, 0, 2, 0, 5])) // ➞ [2, 5, 0, 0, 0]

p(zeroesToEnd([4, 4, 5])) // ➞ [4, 4, 5]

p(zeroesToEnd([0, 0])) // ➞ [0, 0]