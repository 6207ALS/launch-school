// JS210 Exercises | Easy 3
// Exercise 9 - Letter Counter Part 2

/*
PROBLEM:
Modify the wordSizes function from the previous exercise to exclude non-letters 
when determining word size. 

Input: String
Output: Object

Rules:
	- Words consist of any sequence of non-space characters.
	- Assume input will always be a string
	- Empty string should return empty object
	- Non-letters do NOT attribute to word's length
		- For instance, the word size of "it's" is 3, not 4.

TEST CASES:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

REQUIREMENTS:
	- Split string by words, using space as delimiter
	- For each word, determine its length 
		- (LENGTH DOES NOT ACCOUNT FOR NON-LETTER CHARACTER)
		- Keep a tally of words with that length
		- increment tally by 1
	- Return tally (object)

DATA STRUCTURE:
	OBJECT -> tally
	STRING

ALGORITHM:
	LET WORDS = SPLIT STRING BY SPACE -> ARRAY OF WORDS
	LET TALLY = {}

	FOR EACH WORD IN WORDS
		REMOVE ANY NON-LETTERS FROM WORD AND THEN DETERMINE LENGTH OF WORD
		IF LENGTH DOESNT EXIST AS KEY IN TALLY
			CREATE A PROPERTY IN TALLY (LENGTH IS THE KEY, 0 IS VALUE )

		INCREMENT VALUE OF WORD[LENGTH]

	RETURN TALLY
*/

function wordSizes(str) {
	if (!str) return {};
	let words = str.split(" ");
	let tally = {};

	for (let word of words) {
		let length = word.replaceAll(/[^a-z]/ig, "").length;
		if (!tally[length]) tally[length] = 0;
		tally[length]++;
	}

	return tally;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));			                        // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}