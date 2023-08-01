// JS210 Exercises | Easy 5
// Exercise 6 - Counting Up

/*
PROBLEM:
Write a function that takes an integer argument and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

Input: Number
Output: Array

Rules:
	- Assume that the argument will always be a positive integer.
	- Return an array containing all integers between 1 and the argument 
		(inclusive)
	- Array should be in ascending order.
	- Leading zeros in argument should be ignored 

TEST CASES:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
sequence(01);    // [1]

REQUIREMENTS:
	- INITIALIZE RESULT ARRAY
	- ITERATE VALUES FROM 1 TO ARGUMENT
	- PUSH EACH ITERATED VALUE TO RESULT ARRAY

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET RESULT = []
	
	FOR I IN RANGE 1 - ARGUMENT (INCLUSIVE)
		PUSH I TO RESULT

	RETURN RESULT
*/

function sequence(num) {
	let result = [];
	
	for (let i = 1; i <= num; i++) {
		result.push(i);
	}

	return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
// console.log(sequence(01));    // [1]