// JS210 Exercises | Easy 5
// Exercise 5 - Always return negative

/*
PROBLEM:
Write a function that takes a number as an argument. If the argument is a 
positive number, return the negative of that number. If the argument is a 
negative number, return it as-is.

Input: Number
Output: Number

Rules:
	- If the argument is a positive number, return the negative of that number.
	- If the argument is a negative number, return it as-is.
	- Assume the argument will always be a number (integer or decimal)
		- NaN, Infinity, BigInt, Fractions will not be passed.
	- The number 0 should return -0 (vice versa)
	- Leading zeros should be ignored.

TEST CASES:
negative(5);     // -5
greater than or equal to 0, return negative
-5

negative(-3);    // -3
less than 0, return number
3

negative(0);     // -0
greater than or equal to 0, return negative


negative(00)     // -0
greater than or equal to 0, return negative
-0

negative(00093)  // -93
greater than or equal to 0, return negative
-93

REQUIREMENTS:
	- determine if number is less than 0
		- if number less than 0, return the number as is
		- if number greater than or equal to 0, return the number as negative

DATA STRUCTURE:
	NUMBERS, VARIABLES

ALGORITHM:
	IF NUMBER < 0
		RETURN NUMBER
	ELSE
		RETURN -NUMBER

*/

function negative(num) {
	return num < 0 ? num : -num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
// console.log(negative(00093))  // -93
// console.log(negative(000))  	// -0