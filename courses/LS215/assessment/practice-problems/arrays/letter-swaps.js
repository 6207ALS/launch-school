// LS216 Practice Problems
// Single Letter Swaps

/*
https://edabit.com/challenge/xukQmQoGopXbQMdZj

PROBLEM:
Given an array of strings and an original string, write a function to output an 
array of boolean values - true if the word can be formed from the original word 
by swapping two letters only once and false otherwise.

Input: Array, String
Output: Array

RULES:
	- Assume arguments will always be an Array and a String (in that order)
		- Minimum length of String argument will be 2 characters.
		- Assume the Array will only contain Strings as elements.
			- String elements could be of various lengths.
			- String elements will only contain alphabetical/digit characters, never both.
			- Minimum length of String elements will be 2 characters.
		- Empty array argument should return empty array []
		- Array argument will never be sparse.
		- Array argument can be mutated, if needed.
		- Array argument can contain duplicate Strings.
	- Function should be case-sensitive.

TEST CASES:
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
// ➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
// ➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
// ➞ [true, false, false, false]

validateSwaps(["9786", "9786", "97865", "7689"], "9768")
// ➞ [true, true, false, false]
	
validateSwaps([], "9768")
// ➞ []

REQUIREMENTS:
	- Map every word of words
		- If word is not the same length of target word, return false
		- Split word by characters.
		- Swap every possible pair combination of characters
			- If resulting string is equal to target word, return true
		
		- If every pair combination doesn't return true, return false
	
DATA STRUCTURE:
	ARRAY

ALGORITHM:
	RETURN WORDS MAPPED (WORD)
		IF WORD LENGTH !== TARGET_WORD
			RETURN FALSE

		WORD = WORD SPLIT BY CHARACTERS
		FOR I IN RANGE(0, SECOND-TO-LAST-INDEX)
			FOR J IN RANGE(I + 1, LAST-INDEX)
				LET TEMP = WORD[i]
				WORD[i] = WORD[j]
				WORD[j] = TEMP
				IF ((WORD JOINED BACK INTO STRING) === TARGET_WORD)
					RETURN TRUE

		RETURN FALSE
*/

function validateSwaps(words, targetWord) {
	return words.map(word => {
		if (word.length !== targetWord.length) return false;

		word = word.split("");
		for (let i = 0; i < word.length - 1; i++) {
			for (let j = i + 1; j < word.length; j++) {
				let clone = word.slice();
				let temp = clone[i];
				clone[i] = clone[j];
				clone[j] = temp;
				if (clone.join("") === targetWord) return true;
			}
		}
		return false;
	})
} 

p = console.log;

p(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"))
// ➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

p(validateSwaps(["32145", "12354", "15342", "12543"], "12345"))
// ➞ [true, true, true, true]

p(validateSwaps(["9786", "9788", "97865", "7689"], "9768"))
// ➞ [true, false, false, false]

p(validateSwaps(["9786", "9786", "97865", "7689"], "9768"))
// ➞ [true, true, false, false]
	
p(validateSwaps([], "9768"))
// ➞ []