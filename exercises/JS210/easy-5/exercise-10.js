// JS210 Exercises | Easy 5
// Exercise 10 - Reverse It Part 2

/*
PROBLEM:
Write a function that takes a string argument containing one or more words and 
returns a new string containing the words from the string argument. All 
five-or-more letter words should have their letters in reverse order. The 
string argument will consist of only letters and spaces. Words will be 
separated by a single space.

Input: String
Output: String

Rules:
	- Assume the argument will always be a string of one or more words
	- The returned string contains words from the string argument in same order
	- All five-or-more letter words should have their letters in reverse order.
	- Letter casing should be preserved
	- The string argument will consist of only letters and spaces.
	- Word is a sequence of one or more characters separated by a space
		- Words will be separated by a single whitespace

TEST CASES:
reverseWords('Professional');             // "lanoisseforP"
Professional -> longer than 4 letters

reverseWords('Walk the dog');    // "Walk the dog"

reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
around -> longer than 4 letters
block -> longer than 4 letters

reverseWords('Launch School');            // "hcnuaL loohcS"
Launch -> longer than 4 letters
School -> longer than 4 letters

REQUIREMENTS:
	- Separate string by words into array (single space as delimiter)
	- Check the length of each word in array
		- if length > 4, replace that element with word reversed
	- return words joined back into a string

DATA STRUCTURE:
	- ARRAY -> ABSTRACTION METHODS (MAP)

ALGORITHM:
	LET WORDS = SPLIT STRING BY WORDS INTO ARRAY (SINGLE SPACE AS DELIMITER)
	
	ITERATE EACH ELEMENT OF WORDS
		IF LENGTH OF WORD IS > 4
			REPLACE (MAP) WORD WITH WORD REVERSED
		ELSE
			KEEP WORD AS IS
	
	RETURN WORDS JOINED BACK INTO STRING

*/

function reverseWords(str) {
	return str.split(" ").map(word => {
		if (word.length > 4) {
			return word.split("").reverse().join("");
		} else {
			return word;
		}
	}).join(" ");
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk the dog'));             // "Walk the dog"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"