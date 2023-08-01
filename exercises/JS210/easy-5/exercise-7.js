// JS210 Exercises | Easy 5
// Exercise 7 - Name Swapping

/*
PROBLEM:
Write a function that takes a string argument consisting of a first name, a 
space, and a last name, and returns a new string consisting of the last name, 
a comma, a space, and the first name.

Input: String
Output: String

Rules:
	- Assume the argument will always be a string in the format of "[first] [last]"
	- The returned string should always be formatted: "[last], [first]"
	- The names (first and last) could have non-alphabetical characters, 
	- The names (first and last) will not have whitespace in them.
	- Name suffixes (Jr., Dr., PhD) will NOT be in string argument
	- Preserve letter-casing
	- Argument will never be empty string
	- Argument will always provide a first name and last name (both of any length)

TEST CASES:
swapName('Joe Roberts');    			// "Roberts, Joe"
swapName('JOE Roberts');    			// "Roberts, JOE"
swapName('J E');   				  			// "E, J"
swapName('Carl$ Robinson');    		// "Robinson, Carl$"

REQUIREMENTS:
	- Split string by first and last name
		- use space as delimiter
	- Place extracted names into format of "[last], [first]"

DATA STRUCTURE:
	- ARRAY
	- STRING

ALGORITHM:
	LET NAMES = SPLIT STRING BY NAMES USING SPACE AS DELIMITER
	LET FIRST = FIRST ELEMENT OF NAMES
	LET LAST = SECOND ELEMENT OF NAMES

	RETURN `[last], [first]`
*/

function swapName(name) {
	let names = name.split(" ");
	let [first, last] = [names[0], names[1]];

	return `${last}, ${first}`;
}

console.log(swapName('Joe Roberts'));    			// "Roberts, Joe"
console.log(swapName('JOE Roberts'));    			// "Roberts, JOE"
console.log(swapName('J E'));   				  			// "E, J"
console.log(swapName('Carl$ Robinson'));    		// "Robinson, Carl$"