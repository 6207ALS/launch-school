// JS210 Exercises | Easy 5
// Exercise 8 - Sequence Count

/*
PROBLEM:
Create a function that takes two integers as arguments. The first argument is a 
count, and the second is the starting number of a sequence that your function 
will create. The function should return an array containing the same number of 
elements as the count argument. The value of each element should be a multiple 
of the starting number.

Input: 2 Numbers
Output: Array

Rules:
	- The first argument is a count
	- The function should return an array containing the same number of elements 
		as the count argument.
	- Assume that the count argument will always be an integer greater than or 
		equal to 0.
	- If the count is 0, the function should return an empty array.

	- The second is the starting number of a sequence that your function will 
		create.
	- The value of each element should be a multiple of the starting number.
	- The starting number can be any integer (including negative and 0).

	- Assume the function will always be provided two numbers (integers) as 
		arguments.
	- The multiples in the array should be ordered least to greatest (opposite 
		for negative sequences)

TEST CASES:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

REQUIREMENTS:
	- Initialize an empty result ARRAY 
	- Fill array will multiples of start argument
		- loop "count" times
		- for each loop, add (loop count * start argument) to result array

DATA STRUCTURE:
	ARRAY -> Abstraction methods (?)

ALGORITHM:
	LET RESULT = []

	FOR I IN RANGE OF 1 TO COUNT (INCLUSIVE)
		PUSH (I * START) TO RESULT

	RETURN RESULT
*/

function sequence(count, start) {
	let result = [];

	for (let i = 1; i <= count; i++) result.push(i * start);

	return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []