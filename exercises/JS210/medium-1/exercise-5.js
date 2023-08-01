// JS210 Exercises | Medium 1
// Exercise 5 - Word to Digit

/*
PROBLEM:
Write a function that takes a sentence string as an argument and returns that 
string with every occurrence of a "number word" — 'zero', 'one', 'two', 
'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its 
corresponding digit character.

Input: String
Output: String

Rules:
	- Every occurrence of a "number word" — 'zero', 'one', 'two', 
		'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its 
		corresponding digit character
	- Function does not need to convert any other number word, i.e., "eleven"
	- A word is a series of one or more non-whitespace characters
	- Every word is separated by a single space character.

	- Assume string argument will not have any leading or trailing whitespace.
	- Assume argument will always a string
		- Empty string should return an empty string
	- String could possibly contain no whitespace

TEST CASES:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
["Please", "call", "me", "at", "five", "five", "five", "one", "two", "three", 
"four", ".", "Thanks."] =>
["Please", "call", "me", "at", "5", "5", "5", "1", "2", "3", 
"4.", "Thanks."] =>

wordToDigit('five five five one two three four.');
"5 5 5 1 2 3 4."

wordToDigit('five five five eleven two three four.')
"5 5 5 eleven 2 3 4."

wordToDigit('apple')
"apple"

wordToDigit('five')
"5"

wordToDigit('')
""

REQUIREMENTS:
	- CREATE OBJECT THAT MAPS EACH NUMBER WORD TO ITS DIGIT CHARACTER
	- SPLIT SENTENCE BY WORDS INTO ARRAY (USING " " AS DELIMITER)
	- FOR EACH WORD IN WORDS, CHECK IF WORD CONTAINS NUMBER WORD
	- IF WORD CONTAINS NUMBER WORD, REPLACE NUMBER WORD WITH DIGIT CHARACTER
	- IF NOT, LEAVE WORD AS IS

	RETURN WORDS JOINED BACK INTO SINGLE STRING, EACH WORD SEPARATED BY WHITESPACE

DATA STRUCTURE:
	ARRAY, REGEX

ALGORITHM:
	LET WORDS = SPLIT SENTENCE BY WORDS INTO ARRAY (USING " " AS DELIMITER)

	FOR EACH WORD OF WORDS
		REPLACE (MAP) ANY INSTANCE OF NUMBER WORD WITH ITS DIGIT CHARACTER (REGEX)
	
	JOIN WORDS BACK INTO A STRING (EACH WORD SEPARATED BY " ")
*/
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
	let numberRegex = /(zero|one|two|three|four|five|six|seven|eight|nine)/i;
	let words = sentence.split(" ");

	words = words.map(word => word.replace(numberRegex, word => NUM_WORDS[word]));
	return words.join(" ");
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('five five five one two three four.'));
// "5 5 5 1 2 3 4."

console.log(wordToDigit('five five five eleven two three four.'));
// "5 5 5 eleven 2 3 4."

console.log(wordToDigit('apple'));
// "apple"

console.log(wordToDigit('five'));
// "5"

console.log(wordToDigit(''));
// ""