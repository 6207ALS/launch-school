// JS210 Exercises | Easy 5
// Exercise 9 - Reverse It Part 1

/*
PROBLEM:
Write a function that takes a string argument and returns a new string 
containing the words from the string argument in reverse order.

Input: String
Output: String

Rules:
	- Assume the argument will always be a string
	- The returned string contains words from the string argument in REVERSE order
	- Letter casing should be preserved
	- Empty string should return empty string
	- Word is a sequence of one or more characters separated by a space
		- Assume words will be separated by only one whitespace

TEST CASES:
reverseSentence('');                       	// ""
reverseSentence('Hello');			            	// "Hello"
reverseSentence('Hello World');            	// "World Hello"
reverseSentence('Reverse these words');    	// "words these Reverse"
reverseSentence('Reverse these words!!!');  // "words!!! these Reverse"
reverseSentence('R t w!');    							// "w! t R"

REQUIREMENTS:
	- Separate string by words into array (single space as delimiter)
	- Reverse the order of the result array
	- Join the array back into string

DATA STRUCTURE:
	- Array -> reverse
	- String

ALGORITHM:
	LET WORDS = STRING SPLIT BY WORDS INTO ARRAY (USE SINGLE SPACE AS DELIMITER)
	REVERSE THE ORDER OF THE ELEMENTS IN WORDS

	RETURN WORDS JOINED BACK INTO STRING
*/

function reverseSentence(str) {
	return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));                       	// ""
console.log(reverseSentence('Hello'));            				// "Hello"
console.log(reverseSentence('Hello World'));            	// "World Hello"
console.log(reverseSentence('Reverse these words'));    	// "words these Reverse"
console.log(reverseSentence('Reverse these words!!!'));   // "words!!! these Reverse"
console.log(reverseSentence('R t w!'));    							  // "w! t R"