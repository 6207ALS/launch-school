// JS210 Exercises | Easy 5
// Exercise 2 - Double Char Part 2

/*
PROBLEM:
Write a function that takes a string, doubles every consonant character in the 
string, and returns the result as a new string.

Input: String
Output: String

RULES:
	- Original string should not be mutated
		- New string is returned
	- Preserve letter-casing
	- Strictly consonant characters are doubled in the returned string
		- Vowels (aeiou), digits, punctuation, or whitespace ARE NOT doubled
	- Empty string argument returns empty string
	- Assume all arguments will always be strings.

TEST CASES:
doubleConsonants('String');          // "SSttrrinngg"
result = "SSttrrinngg"

doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
result = "HHellllo-WWorrlldd!"

doubleConsonants('July 4th');        // "JJullyy 4tthh"
result = "JJullyy 4tthh"

doubleConsonants('');                // ""
result = ""

REQUIREMENT:
	- INITIALIZE "RESULT" STRING VARIABLE 
	- ITERATE THROUGH EACH CHARACTER OF STRING
	- CHECK IF THE CHARACTER IS A CONSONANT
		- REGEX
		- IF CONSONANT, PUSH CHARACTER TO RESULT TWICE
		- IF NOT CONSONANT, PUSH CHARACTER ONCE

DATA STRUCTURE:
	- ARRAY - ABSTRACTION METHODS -> MAP

ALGORITHM:

	LET RESULT = SPLIT STRING ARGUMENT BY CHARACTER INTO AN ARRAY

	FOR EACH CHARACTER OF RESULT ARRAY
		IF CHARACTER IS CONSONANT
			REPLACE ELEMENT (MAP) WITH CHARACTER DOUBLED
		ELSE
			REPLACE ELEMENT (MAP) WITH ITSELF (LEAVE AS IS)

	RETURN RESULT ARRAY JOINED BACK INTO A STRING
	

doubleConsonants("String")
result = ["S", "t", "r", "i", "n", "g"]
["SS", "tt", 'rr', 'i', 'nn', 'gg']
"SSttrrinngg"
*/

function doubleConsonants(str) {
	let result = str.split("");
	return result.map(char => {
		if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) { 
			return char + char;
		} else {
			return char;
		}
	}).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""