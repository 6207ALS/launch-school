// JS210 Exercises | Easy 3
// Exercise 5 - Palindromic Strings Part 2

/*
PROBLEM:
Write another function that returns true if the string passed as an argument is 
a palindrome, or false otherwise. 

Input: String
Output: Boolean

Rules:
	- function should be case-insensitive
	- function should ignore all non-alphanumeric characters.
	
	- A palindrome reads the same forwards and backwards.
	- Assume the argument will always be a single string
	- Empty string should return true

TEST CASES:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

- "madam" -> "madam"
- "madam" -> "madam"
- "madamimadam" -> "madamimadam"
- "356653" -> "356653"
- "356a653" -> "356a653"
- '123ab321' -> "123ba321"

REQUIREMENTS:
	- generate the string in reverse
	- compare if original string is equal to string reversed
	- remove all non-alphanumeric characters from original string
	- convert all letters to lowercase

DATA STRUCTURE:
	ARRAY -> reverse() -> JOIN back into string

ALGORITHM:
	LET WORD_REVERSED = REMOVE ALL NON-ALPHANUMERIC CHARACTERS FROM STRING,
											CONVERT ALL LETTERS TO LOWERCASE
											SPLIT STRING BY CHARACTERS INTO ARRAY
											REVERSE ORDER OF ELEMENTS IN ARRAY
											JOIN BACK INTO STRING
	
	LET ORIGINAL_STRING = REMOVE ALL NON-ALPHANUMERIC CHARACTERS FROM STRING,
												CONVERT ALL LETTERS TO LOWERCASE

	IF WORD_REVERSE === ORIGINAL_STRING
		TRUE
	ELSE
		FALSE
*/


function isRealPalindrome(str) {
	str = str.replaceAll(/[^a-z0-9]/ig, "").toLowerCase();
	let wordReversed = str.split("").reverse().join("");

	return str === wordReversed;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome(''));            				// true