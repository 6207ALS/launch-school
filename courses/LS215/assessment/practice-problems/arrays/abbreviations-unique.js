// LS216 Practice Problems
// Abbreviations Unique?

/*
https://edabit.com/challenge/H8JABWQfYFN4ZSAxE

PROBLEM:
Write a function that returns true if each abbreviation uniquely identifies a 
word, and false otherwise.

Input: Array, Array
Output: Boolean

Rules:
	- Assume the argument will always be two arguments: two Arrays
		- The array arguments will only contain Strings as elements.
			- Strings will never be empty.
			- Strings will always be in lower case.
		- The array arguments will never be sparse.
		- The number of abbreviations always match the number of words, and vice versa.
			- Empty array arguments should return true.
		- Array arguments can be mutated, if needed.
		- Assume array arguments will never have duplicate values.
	- Assume the first argument will always represent an array of abbreviations
		- Abbreviations will be a substring from [0, n] from the original string
		- Abbreviations could be the entire word (is considered valid)
	- Assume the second argument will always represent an array of words
	- The Boolean output indicates if each abbreviation uniquely identifies a word.
		- Each abbreviation should only be a substring for ONE word in the list of words.


TEST CASES:
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

"house" -> "ho", "h" -> 2 possible abbreviations

uniqueAbbrev(["ho", "h", "ha"], ["house", "hunt", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can both identify "house"

"house" => "ho", "h" -> 2 possible abbreviations -> false


uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true
"stamina" -> "s" -> 1 possible abbreviation 
"television" -> "t" -> 1 possible abbreviation
"vindaloo" -> "v" -> 1 possible abbreviation
= true


uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false
"big" -> "bi" -> 1
"bard" -> "ba" -> 1
"battery" -> "ba", "bat" -> 2 -> false


uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true
"moment" -> mo -> 1
"many" -> ma -> 1
"mean" -> "me" -> 1
= true

uniqueAbbrev(["stamina", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true
"stamina" -> "stamina" -> 1
"television" -> "t" -> 1
"vindaloo" -> "v" -> 1
= true

REQUIREMENTS:
	- Iterate through each word in words
		- For each word, find all valid abbreviations for the word
		- If number of valid abbreviations > 1, return false
	- To determine if an abbreviation matches a word, check if abbreviations
		appears at BEGINNING of word. If so, it is a valid abbreviation.

	- If iterated through every word, and none returned false, return true.

DATA STRUCTURE:
	ARRAY
	STRING

ALGORITHM:

UNIQUE_ABBREV(ABBREVIATIONS, WORDS)
	FOR EACH WORD OF WORDS
		LET VALID_ABBREVIATIONS = ABBREVIATIONS FILTERED WITH MATCHING ABBREVIATIONS
			- LET CURRENT_WORD = WORD
			- SLICE WORD FROM 0 => LENGTH OF ABBREVIATION
			- LET ABBREVIATION = CURRENT_ABBREVIATION
			- RETURN SLICED_WORD === CURRENT_ABBREVIATION
		IF LENGTH OF VALID_ABBREVIATIONS > 1
			RETURN FALSE

	RETURN TRUE
*/

function uniqueAbbrev(abbreviations, words) {
	for (let word of words) {
		let validAbbreviations = abbreviations.filter(abbreviation => {
			let abbreviatedWord = word.slice(0, abbreviation.length);
			return abbreviatedWord === abbreviation;
		});
		if (validAbbreviations.length > 1) return false;
	}

	return true;
}

p = console.log;

p(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])) // ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

p(uniqueAbbrev(["ho", "h", "ha"], ["house", "hunt", "happy"])) // ➞ false
// "ho" and "h" are ambiguous and can both identify "house"
p(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])) // ➞ true
p(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])) // ➞ false
p(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"])) // ➞ true
p(uniqueAbbrev(["stamina", "t", "v"], ["stamina", "television", "vindaloo"])) // ➞ true