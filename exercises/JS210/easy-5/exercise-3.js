// JS210 Exercises | Easy 5
// Exercise 3 - Reverse Number

/*
PROBLEM:
Write a function that takes a positive integer as an argument and returns that 
number with its digits reversed.

Input: Number
Output: Number

Rules:
	- Assume the argument will always be a positive integer
	- Leading zeros of the reversed number are dropped
		- 12000 -> 00021 -> 21
	- Any other zeros are preserved
		- 12020 -> 02021 -> 2021

TEST CASES:
	reverseNumber(12345);    // 54321
	12345 -> "12345" -> ["1", "2", "3", "4", "5"]
	["5", "4", "3", "2", "1"] -> "54321" -> 54321

	reverseNumber(12213);    // 31221
	reverseNumber(456);      // 654
	reverseNumber(1);        // 1
	
	reverseNumber(12000);    // 21 -- Note that zeros get dropped!
	12000 -> "12000" -> ["1", "2", "0", "0", "0"]
	["0", "0", "0", "2", "1"] -> "00021" -> 21

REQUIREMENTS:
	- CONVERT NUMBER INTO STRING
	- SPLIT STRING BY CHARACTERS INTO ARRAY
	- REVERSE THE ARRAY'S ELEMENTS
	- JOIN ARRAY BACK INTO STRING
	- CONVERT STRING BACK INTO NUMBER (SHOULD REMOVE ANY LEADING ZEROS)

DATA STRUCTURE:
	- ARRAY - .reverse()

ALGORITHM:
	LET RESULT = NUM CONVERTED INTO STRING, SPLIT BY CHARACTERS INTO ARRAY
	REVERSE RESULT ARRAY'S ELEMENTS
	JOIN ARRAY BACK INTO STRING
	RETURN STRING CONVERTED BACK INTO NUMBER
*/

function reverseNumber(num) {
	return Number(String(num).split("").reverse().join(""));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1