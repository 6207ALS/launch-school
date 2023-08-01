// LS216 Practice Problems
// Remove The Last Vowel

/*
https://edabit.com/challenge/rEyBNGafoHLYmyKfj

PROBLEM:
Write a function that removes the last vowel in each word in a sentence.

Input: String
Output: String

RULES:
	- Vowels are a, e, i, o, u
	- Argument will always be a single String
	- String will always contain at least 1 word.
	- Sentence: A series of one or more words, each separated by single whitespace
	- Word: A series of one or more non-whitespace characters, bounded by whitespace
	- String will not have any leading/trailing whitespace.
	- Output string should preserve lettercasing.
	- Some words may not have any vowels at all.
	- Some words may have only vowels.

TEST CASES:
removeLastVowel("Those who dare to fail miserably can achieve greatly.")
➞ "Thos wh dar t fal miserbly cn achiev gretly."

Those -> oe -> e
esohT -> sohT -> Thos

removeLastVowel("Love is a serious mental disease.")
➞ "Lov s  serios mentl diseas"

removeLastVowel("Get busy living or get busy dying.")
➞ "Gt bsy livng r gt bsy dyng"

removeLastVowel("Apple")
➞ "Apple"

removeLastVowel("c")
➞ "c"

removeLastVowel("aeiou qwrtz")
➞ "aeio qwrtz"

REQUIREMENTS:
	- Split sentence into words.
	- For each word of words, remove all consonants.
		- Last character of resulting string is the vowel to remove from the word.
	- Split word into character, reverse order of characters.
	- Splice element at index of determine vowel.
	- reverse characters back into original order, and join characters back into a word
	- Reassign word to resulting string.

DATA STRUCTURE:
	- ARRAY
	- STRING

ALGORITHM:
	LET WORDS = SPLIT STR_ARG INTO ARRAY (" " AS DELIMITER)

	FOR LET INDEXES OF WORDS
		LET WORD = WORDS[I]
		LET WORD_VOWELS = REMOVE ALL CONSONANTS FROM WORD
		LET LAST_VOWEL = LAST CHARACTER OF WORD_VOWELS

		WORD = WORD SPLIT BY CHARACTERS
					 REVERSE THE ORDER OF CHARACTERS
			
		SPLICE THE ELEMENT AT THE INDEX OF LAST_VOWEL
		WORD = REVERSE THE ORDER OF CHARACTERS
					 JOIN CHARACTERS BACK INTO SINGLE STRING

		WORDS[I] = WORD

	RETURN WORDS JOINED BACK INTO SINGLE SENTENCE
*/

function removeLastVowel(str) {
	let words = str.split(" ");
	words = words.map((word) => {
		if (word.length === 1 && /[^aeiou]/i.test(word)) return word;
		
		let wordVowels = word.replaceAll(/[^aeiou]/ig, "");
		let lastVowel = wordVowels[wordVowels.length - 1];
		word = word.split("").reverse();
		word.splice(word.indexOf(lastVowel), 1)
		word = word.reverse().join("");

		return word;
	});

	return words.join(" "); 
}

p = console.log;

p(removeLastVowel("Those who dare to fail miserably can achieve greatly."))
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

p(removeLastVowel("Love is a serious mental disease."))
// ➞ "Lov s  serios mentl diseas"

p(removeLastVowel("Get busy living or get busy dying."))
// ➞ "Gt bsy livng r gt bsy dyng"

p(removeLastVowel("Apple"))
// ➞ "Apple"

p(removeLastVowel("c"))
// ➞ "c"

p(removeLastVowel("aeiou qwrtz"))
// ➞ "aeio qwrtz"