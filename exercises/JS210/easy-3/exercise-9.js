// JS210 Exercises | Easy 3
// Exercise 9 - Letter Counter Part 1

/*
PROBLEM:
Write a function that takes a string consisting of one or more space separated 
words and returns an object that shows the number of words of different sizes.

Input: String
Output: Object

Rules:
	- Words consist of any sequence of non-space characters.
	- Assume input will always be a string
	- Empty string should return empty object
	- Non-alphabetical characters attribute to word's length (', ?, !, ., etc.)

TEST CASES:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
four : 4
score : 5
and : 3
seven. : 6


wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
Hey : 3
diddle: 6
diddle, : 7
the : 3
cat : 3
and : 3
the : 3
fiddle! : 7

wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
What's : 6
up: 2
doc? : 4

wordSizes('');                                            // {}


REQUIREMENTS:
	- Split string by words, using space as delimiter
	- For each word, determine its length
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
		DETERMINE LENGTH OF WORD
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
		if (!tally[word.length]) tally[word.length] = 0;
		tally[word.length]++;
	}

	return tally;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));			                        // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}