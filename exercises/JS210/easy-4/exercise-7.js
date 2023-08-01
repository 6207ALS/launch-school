// JS210 Exercises | Easy 4
// Exercise 7 - Multiply Lists

/*
PROBLEM:
Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index.

Input: 2 Arrays
Output: 1 Array

Rules:
	- Assume that the arguments contain the same number of elements.
	- Assume that all elements of both arrays will be numbers (integers)
	- Function can mutate array arguments if required in implementation
	- Arguments of empty arrays should return empty array

TEST CASES:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
[] -> [27] -> [27, 50] -> [27, 50, 77]

multiplyList([], [])										 // []
[]


REQUIREMENTS:
	- INITIALIZING RESULT ARRAY TO CONTAIN THE PRODUCTS
	- ITERATE THROUGH THE INDEXES OF BOTH ARRAYS
		- ADD PRODUCT OF VALUES (FOR BOTH ARRAYS) TO THE RESULT ARRAY

DATA STUCTURES:
	- ARRAY

ALGORITHM:
	LET RESULT = [];

	FOR INDEX IN RANGE OF 0 TO END OF ARR1
		LET PRODUCT = ARR1[INDEX] * VALUE OF ARR2[INDEX]
		PUSH PRODUCT TO RESULT

	RETURN RESULT
*/

function multiplyList(arr1, arr2) {
	let result = [];

	for (let i = 0; i < arr1.length; i++) {
		result.push(arr1[i] * arr2[i]);
	}

	return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([], []));    								 // []