// JS210 Exercises | Easy 3
// Exercise 6 - Palindromic Number

/*
PROBLEM:
Write a function that returns true if its integer argument is palindromic, or 
false otherwise. 

Input: Number
Output: Boolean

Rules:
	- A palindromic number reads the same forwards and backwards.
	- Assume the argument will always be an integer
	- Preserve any leading zeros
		- 00100 -> 00100 = palindomic
		- 100 -> 001 = not palindromic

TEST CASES:
isPalindromicNumber(34543);        // true
34543 -> 34543

isPalindromicNumber(123210);       // false
123210 -> 012321

isPalindromicNumber(22);           // true
22 -> 22

isPalindromicNumber(5);            // true
5 -> 5

REQUIREMENTS:
	- Reverse the number argument
	- Compare if reversed number === original
	- Preserve any leading zeros

DATA STRUCTURE:
	STRINGS, NUMBERS, VARIABLES

ALGORITHM:
	LET NUMBER_REVERSED = CONVERT NUMBER INTO A STRING
												SPLIT STRING BY CHARACTERS INTO ARRAY
												REVERSE ORDER OF ELEMENTS IN ARRAY
												JOIN ARRAY BACK INTO A STRING

	IF NUMBER_REVERSED === ORIGINAL_NUMBER (AS A STRING)
		RETURN TRUE
	ELSE
		RETURN FALSE

*/

function isPalindromicNumber(num) {
	let numReversed = String(num).split("").reverse().join("");

	return (numReversed === String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true