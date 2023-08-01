// JS210 Exercises | Easy 3
// Exercise 4 - Palindromic Strings Part 1

/*
PROBLEM:
Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. 

Input: String
Output: Boolean

Rules:
	- A palindrome reads the same forwards and backwards.
	- For this problem, the case matters and all characters matter.
	- Assume the argument will always be a single string
	- Empty string should return true

TEST CASES:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
isPalindrome("")										 // true

- "madam" -> "madam"
- "Madam" -> "madaM"
- "madam i'm adam" -> "mada m'i madam"
- '356653' -> '356653'
- "" -> ""

REQUIREMENTS:
	- generate the string in reverse
	- compare if original string is equal to string reversed
	- preserve letter casing
	- preserve all characters

DATA STRUCTURE:
	ARRAY -> reverse() -> JOIN BACK INTO STRING

ALGORITHM:
	LET WORD_REVERSED = STRING'S CHARACTERS SPLIT INTO ARRAY, REVERSE THE ARRAY, 
											AND JOIN ELEMENTS BACK INTO A SINGLE STRING

	IF WORD_REVERSE === ORIGINAL_STRING
		TRUE
	ELSE
		FALSE
*/

function isPalindrome(str) {
	let wordReversed = str.split("").reverse().join("");

	return wordReversed === str;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome(""));										 // true