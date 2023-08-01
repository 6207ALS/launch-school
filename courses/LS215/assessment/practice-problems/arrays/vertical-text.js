// LS216 Practice Problems
// Vertical Text

/*
https://edabit.com/challenge/aBMEMcMoWbbSRjFWS

PROBLEMS:
Create a function that converts a string into a matrix of characters that can 
be read vertically.

Input: String
Output: Array

RULES:
	- Add spaces when characters are missing.
	- Argument will always be a single string.
		- String will be a series of words, each separated by a single whitespace.
		- Word: a series of one or more non-whitespace characters.
			- Words can contain numbers, letters, special characters.
		- String can contain both uppercase and lowercase letters.
		- String will not have any leading/trailing whitespace.
		- String will always contain at least one word.

TEST CASES:
verticalText("Holy bananas") 
// [
//	 ["H", "b"],
//	 ["o", "a"],
//	 ["l", "n"],
//	 ["y", "a"],
//	 [" ", "n"],
//	 [" ", "a"],
//	 [" ", "s"]
// ]

[
	["H", "b"]
	["o", "a"]
	["l", "n"]
	["y", "a"]
	[" ", "n"]
	[" ", "a"]
	[" ", "s"]
]

verticalText("Hello fellas") 
// [
//   ["H", "f"],
//   ["e", "e"],
//   ["l", "l"],
//   ["l", "l"],
//   ["o", "a"],
//   [" ", "s"]
// ]

verticalText("Hello") 
// [
//   ["H"]
//   ["e"]
//   ["l"]
//   ["l"]
//   ["o"]
// ]

REQUIREMENTS:
	- Number of columns in matrix === Number of words in String argument
	- Number of rows in matrix === Length of longest word in String argument.
	- Initialize a result matrix with dimension of columns x rows
		- Fill each element with " "
	- Split string argument by words
	- Iterate through each word of words, keeping track of index and word
		-	Iterate through each letter of word, keeping track of index and letter
			- At [letter_index]th subarray, and at [word_index]th index of the subarray
				- Reassign element with letter.

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET WORDS = SPLIT STRING ARGUMENT BY WORDS (" " AS DELIMITER)
	LET LENGTH_LONGEST_WORD = RETURN HIGHEST VALUE OF (MAP WORDS BY THE LENGTH OF EACH WORD)

	LET COLUMNS = LENGTH OF WORDS
	LET ROWS = LONGEST_WORD

	LET MATRIX = 2D ARRAY WITH DIMESIONS OF COLUMNS X ROWS (EACH ELEMENT BEING " ");

	FOR EACH WORD OF WORDS (I)
		FOR EACH CHARACTER OF WORD (J)
			MATRIX[J][I] = CHARACTER

	RETURN MATRIX
*/

function verticalText(text) {
	let words = text.split(" ");
	let lengthLongestWord = Math.max(...(words.map(word => word.length)));

	const COLUMNS = words.length;
	const ROWS = lengthLongestWord;

	let matrix = createMatrix(COLUMNS, ROWS);

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		for (let j = 0; j < word.length; j++) {
			let character = word[j];
			matrix[j][i] = character;
		}
	}

	return matrix;
}

function createMatrix(columns, rows) {
	let matrix = [];

	for (let i = 0; i < rows; i++) {
		let row = []
		for (let j = 0; j < columns; j++) {
			row.push(" ");
		}
		matrix.push(row);
	}

	return matrix;
}

p = console.log;

p(verticalText("Holy bananas")) 
// [
// 	["H", "b"]
// 	["o", "a"]
// 	["l", "n"]
// 	["y", "a"]
// 	[" ", "n"]
// 	[" ", "a"]
// 	[" ", "s"]
// ]


p(verticalText("Hello fellas")) 
// [
//   ["H", "f"],
//   ["e", "e"],
//   ["l", "l"],
//   ["l", "l"],
//   ["o", "a"],
//   [" ", "s"]
// ]

p(verticalText("Hello")) 
// [
//   ["H"]
//   ["e"]
//   ["l"]
//   ["l"]
//   ["o"]
// ]