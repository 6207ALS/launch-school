// LS216 Practice Problems
// Rearrange the Sentence

/*
https://edabit.com/challenge/TZR9EM6xcJrer4Naq

PROBLEM:
Given a sentence with numbers representing a word's location embedded within 
each word, return the sorted sentence.

Input: String
Output: String

RULES:
	- Sentence: A series of one or more words separated by single whitespaces.
	- Word: A series of one or more non-whitespace characters surrounded by whitespace.
		- A word with just a single number character is not possible.
	- Assume the argument will always be a single string.
	- Assume the string will never have leading/trailing whitespace.
	- Assume every word in sentence will always contain one number character in it.
	- Assume every number character is within the range of (# of words) in sentence.
	- Number character can appear in any location of the word.
	- Output string should preserve lettercase of input string.
	- If string is empty, return ""
	- Each word in input string should be the "number character"th word in the 
		output string.
	- Words could also contain other non-digit characters such as ".", "!", "?" etc.
	- Input string will never have a repeating number character.
	- Words in output string should remove the number character that was in the
		input string.
	- Only the integers 1-9 will be used.
		- The sentence will only contain 1 - 9 words

TEST CASES:
rearrange("is2 Thi1s T4est 3a") // ➞ "This is a Test"

[is2, thi1s, t4est, 3a] -> 4 elements
2 is, 1 this, 4 test, 3 a

[this, is, a, test]


rearrange("4of Fo1r pe6ople g3ood th5e the2") // ➞ "For the good of the people"

rearrange("4of Fo1r pe6ople. g3ood th5e the2") // ➞ "For the good of the people."

rearrange("hello1") // ➞ "hello"

rearrange("My2 Jo5e is4 you9 He1llo. name3 8meet Nic6e to7") // -> "Hello. My name is Joe. Nice to meet you!"

rearrange(" ") // ➞ ""

rearrange("") // ➞ ""

REQUIREMENTS:
	- Split sentence by words (using " " as delimiter)
	- Create a new array with length of (number of elements in "words")
	- For each word in "words"
		- extract the number character
		- extract the word without the number character
		- new array at index [num_char - 1] = word without num_char

DATA STRUCTURE:
	- Array

ALGORITHM:
	IF STRING IS EMPTY OR EVERY CHARACTER IN STRING IS WHITESPACE
		RETURN ""

	LET WORDS = SPLIT STRING ARG WITH " " AS DELIMITER

	LET RESULT = NEW ARRAY WITH LENGTH OF (NUM OF ELEMENTS IN WORDS)
	
	FOR EACH WORD IN WORDS
		LET NUM_CHAR = EXTRACT NUMBER_CHARACTER IN WORD
		LET CLEAN_WORD = WORD WITHOUT NUMBER_CHARACTER
		RESULT[NUM_CHAR - 1] = CLEAN_WORD

	RETURN RESULT JOINED BACK INTO A STRING (WITH " " AS DELIMITER)
*/

function rearrange(str) {
	if (!str || str.split(" ").every(char => char === "")) return "";

	let words = str.split(" ");
	let result = new Array(words.length);
	
	for (let word of words) {
		let numChar = Number(word.match(/\d/)[0]);
		word = word.replaceAll(/\d/g, "");
		result[numChar - 1] = word;
	}

	return result.join(" ");
}

p = console.log;

p(rearrange("is2 Thi1s T4est 3a")) // ➞ "This is a Test"

p(rearrange("4of Fo1r pe6ople g3ood th5e the2")) // ➞ "For the good of the people"

p(rearrange("4of Fo1r pe6ople. g3ood th5e the2")) // ➞ "For the good of the people."

p(rearrange("hello1")) // ➞ "hello"

p(rearrange("My2 Jo5e. is4 you9 He1llo. name3 8meet Nic6e to7")) // -> "Hello. My name is Joe. Nice to meet you!"

p(rearrange(" ")) // ➞ ""

p(rearrange("")) // ➞ ""