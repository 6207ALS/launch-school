// JS210 Exercises | Easy 3
// Exercise 8 - Letter Swap

/*
PROBLEM:
Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word.

Input: String
Output: String

Rules:
	- Assume that every word contains at least one letter.
	- Assume the string will always contain at least one word.
	- Assume that each string contains nothing but words and spaces.
	- Assume there are no leading, trailing, or repeated spaces.
	- Assume the argument will always be a string.
	- Preserve the letter casing of swapped letters.
	- Every word will always begin and end with alphabetical letters

TEST CASES:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
"Oh" -> "hO", "what" -> "thaw", "a" -> "a", "wonderful" -> "londerfuw",
"day" -> "yad", "it" -> "ti", "is" -> "si"

swap('Abcde');                          // "ebcdA"
"Abcde" -> "ebcdA"

swap('a');                              // "a"
"a" -> "a"

["abcde"]

REQUIREMENTS:
	- Split string by spaces -> array of words
	- For each word in array, swap first and last letters
		- split word by letters into an array
		- swap element values of first index and last index
		- join array back into word
		- reassign current element to "swapped word"

ALGORITHM:
	LET WORDS = SPLIT STRING BY SPACES -> ARRAY OF WORDS
	
	ITERATE THROUGH THE ELEMENTS OF WORDS
		LET NEW_WORD = SPLIT ELEMENT BY LETTERS INTO ARRAY
		LET TEMP = LAST ELEMENT'S VALUE IN ARRAY
		NEW_WORD[LAST_INDEX] = VALUE OF FIRST ELEMENT
		NEW_WORD[FIRST_INDEX] = TEMP
		REASSIGN ELEMENT TO NEW_WORD (JOINED BACK INTO STRING)
	
	RETURN WORDS JOINED BACK INTO A STRING
*/

function swap(str) {
	let words = str.split(" ");

	for (let i = 0; i < words.length; i++) {
		let newWord = words[i].split("");
		let temp = newWord[newWord.length - 1];
		newWord[newWord.length - 1] = newWord[0];
		newWord[0] = temp;
		words[i] = newWord.join("");
	}

	return words.join(" ");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"