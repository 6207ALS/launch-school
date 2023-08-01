// JS210 Exercises | Easy 4
// Exercise 8 - Digits List

/*
PROBLEM:
Write a function that takes one argument, a positive integer, and returns a 
list of the digits in the number.

Input: Number
Output: Array

Rules:
	- Function takes one argument: a positive integer
	- Assume one argument (positive integer) will always be provided
	- Elements of returned array should be integers
	- Disregard leading zeros, i.e., 007 = 7
	- Elements of array should be in the same order of digits in number 
		(left to right)
	- Duplicated values are allowed.

TEST CASES:
digitList(12345);       // [1, 2, 3, 4, 5]
[] -> [1, 2, 3, 4, 5]


result = [1, 2, 3, 4, 5];

12345 => "12345"
"1", "2"

digitList(7);           // [7]
[] -> [7]

result = [7];

7 => "7"
"7"

digitList(375290);      // [3, 7, 5, 2, 9, 0]
[] -> [3, 7, 5, 2, 9, 0]

digitList(444);         // [4, 4, 4]
[] -> [4, 4, 4]

digits(007);
[] -> [7]

7 => "7"

REQUIREMENTS:
	- INITIALIZE RESULT ARRAY
	- ITERATE THROUGH DIGITS OF NUMBER ARGUMENT (LEFT TO RIGHT)
		- FOR EACH DIGIT, PUSH THE DIGIT TO THE RESULT ARRAY

DATA STRUCTURE:
	- ARRAY -> Order of elements is important

ALGORITHM:
	LET RESULT = [];

	CONVERT THE NUMBER TO STRING
	ITERATE THROUGH EACH CHARACTER (DIGIT) OF THE STRING
		PUSH THE CHARACTER TO RESULT (AS A NUMBER)
	
	RETURN RESULT
*/

function digitList(num) {
	let result = [];
	
	for (let char of String(num)) {
		result.push(Number(char));
	}

	return result;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
// console.log(digitList(007));         // [7]