// JS210 Exercises | Easy 4
// Exercise 6 - Multiplicative Average

/*
PROBLEM:
Write a function that takes an array of integers as input, multiplies all of 
the integers together, divides the result by the number of entries in the 
array, and returns the result as a string with the value rounded to three 
decimal places.

Input: 1 Array
Output: String (Multiplicative Average)

Rules:
	- Argument is an array of integers
	- Multiplicative Average:
		- Sum of array's values
		- Sum / numbers of entries in array
	- Output (multiplicative average) should a string
		- value rounded to three decimal places
	- Average: 0 -> "0.000"
	- Array can be mutated if required in implementation

TEST CASES:
showMultiplicativeAverage([3, 5]);                   // "7.500"
3 * 5 = 15 / 2 = 7.5 -> "7.500"

let product = 15;
let m_a = 15 / 2 =  7.5
let r_a = 7.500
"7.500"

showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
2 * 5 * 7 * 11 * 13 * 17 = 170170 / 6 = 28361.666666666668 -> "28361.667"
3 * 5 = 15 / 2 = 7.5 -> "7.500"

let product = 170170;
let m_a = 15 / 2 =  28361.666666666668
let r_a = 28361.667
"28361.667"


REQUIREMENTS:
	- CALCULATE MULTIPLICATIVE AVERAGE OF ARRAY'S VALUES
	- ROUND AVERAGE TO 3 DECIMAL PLACES
		- CONVERT RESULT TO STRING

DATA STRUCTURE:
	- ARRAYS -> ABSTRACTION METHODS (REDUCE)

ALGORITHM:
	LET PRODUCT = DETERMINE PRODUCT OF ALL VALUES IN ARRAY (REDUCE)

	LET MULTIPLICATIVE_AVERAGE = PRODUCT / LENGTH OF ARRAY
	LET ROUNDED_AVERAGE = ROUND AVERAGE TO 3 DECIMAL PLACES (.toFixed(3))

	RETURN ROUNDED_AVERAGE CONVERTED TO STRING;
*/

function showMultiplicativeAverage(arr) {
	let product = arr.reduce((acc, val) => acc * val, 1);
	let multiplicativeAverage = (product / arr.length).toFixed(3);

	return String(multiplicativeAverage);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 0, 17]));    // "0.000"