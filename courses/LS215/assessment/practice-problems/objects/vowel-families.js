// LS216 Practice Problems
// Vowel families

/*
https://edabit.com/challenge/nxSeD3tvqQkumGNid

PROBLEM:
Write a function that selects all words that have all the same vowels (in any 
order and/or number) as the first word, including the first word.

Input: Array
Output: Array

Rules:
	- Words will contain only lowercase letters, and may contain whitespaces.
	- Frequency does not matter (e.g. if the first word is "loopy", then you can 
		include words with any number of o's, so long as they only contain o's, and 
		not any other vowels).
	
	- Assume the argument will always be a single array of strings.
		- The array will always contain at least 1 element.
		- The strings (including the first element) can be empty.
		- A valid string ONLY has the same vowels as the first word.
			- If the string has vowels other than the vowels in the first word, the
				string is not valid. 
		- Non-primitive data types can be mutated, if needed.
		- The array will never be sparse.
		- There can be duplicate string elements.
			- Each should be treated as unique.

TEST CASES:
sameVowelGroup(["toe", "ocelot", "maniac"]) 
// ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) 
// ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) 
// ➞ ["hoops", "bot", "bottom"]

sameVowelGroup(["hoops", "chuff", "bot", "bot", "bottom"]) 
// ➞ ["hoops", "bot", "bot", "bottom"]

sameVowelGroup(["", "chuff", "bot", "gym"]) 
// ➞ ["", "gym"]

sameVowelGroup(["chuff"]) 
// ➞ ["chuff"]

REQUIREMENTS:
	- Determine which vowels every word MUST have
		- Extract all unique vowels from first word of arr
	- Determine which vowels every word CANNOT have
		- Extract all unused vowels from first word of arr

	- Initialize empty result array to contain all valid strings.
	- Iterate through elements of array argument
		- If string contains every required vowel AND doesn't contain any of 
			forbidden vowels, it is valid: add to result array.
		- Else, the string is invalid: continue to next word
	
DATA STRUCTURE:
	Array -> Abstraction Methods (Filter)

ALGORITHM:
	LET ALLOWED_VOWELS = EXTRACT ALL VOWELS IN FIRST ELEMENT OF ARRAY ARG
	LET FORBIDDEN_VOWELS = DETERMINE THE VOWELS THAT WEREN'T USED IN FIRST ELEMENT

	LET RESULT = []

	FOR EACH WORD IN ARRAY ARGUMENT
		IF EVERY CHARACTER OF ALLOWED_VOWELS EXISTS IN CURRENT WORD AND 
		EVERY CHARACTER OF FORBIDDEN_VOWELS DOES NOT EXIST IN CURRENT WORD
			PUSH WORD TO RESULT

	RETURN RESULT
*/

function sameVowelGroup(words) {
	let allowedVowels = (words[0].match(/[aeiou]/g)) || [];
	let forbiddenVowels = ["a", "e", "i", "o", "u"].filter(vowel => !(allowedVowels.includes(vowel)));
	let result = [];

	for (let word of words) {
		if (allowedVowels.every(vowel => word.includes(vowel)) &&
				forbiddenVowels.every(vowel => !word.includes(vowel))) {
					result.push(word);
		}
	}

	return result;
}

p = console.log;

p(sameVowelGroup(["toe", "ocelot", "maniac"])); 
// ➞ ["toe", "ocelot"]

p(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); 
// ➞ ["many"]

p(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); 
// ➞ ["hoops", "bot", "bottom"]

p(sameVowelGroup(["hoops", "chuff", "bot", "bot", "bottom"])); 
// ➞ ["hoops", "bot", "bot", "bottom"]

p(sameVowelGroup(["", "chuff", "bot", "gym"]));
// ➞ ["", "gym"]

p(sameVowelGroup(["chuff"]));
// ➞ ["chuff"]