// JS210 Exercises | Easy 5
// Exercise 1 - Double Char Part 1

/*
PROBLEM:
Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

Input: String
Output: String

Rules:
	- Original string should not be mutated
		- New string is returned
	- Preserve letter-casing
	- Every character (including non-alphabetical) are doubled in the output
	- Empty string argument returns empty string
	- Assume all arguments will always be strings.

TEST CASES:
repeater('Hello');        // "HHeelllloo"
result = 'HHeelllloo';

repeater('Good job!');    // "GGoooodd  jjoobb!!"
result = "GGoooodd  jjoobb!!"

repeater('');             // ""
result = ""

repeater("   ") 					// "      "
result = "      "

repeater("!!)@(#%$")      // "!!!!))@@((##%%$$"
result = "!!!!))@@((##%%$$"

REQUIREMENTS:
	- ITERATE THROUGH CHARACTERS OF STRING ARGUMENT
		- FOR EACH CHARACTER, PUSH CHARACTER TO THE "RESULT" TWICE
	- INITIALIZE A "RESULT" STRING VARIABLE

DATA STRUCTURE:
	- STRING
	- ARRAY -> ABSTRACTION METHODS -> MAP
	
ALGORITHM:
	LET RESULT = SPLIT STRING ARGUMENT BY CHARACTERS INTO ARRAY

	FOR EACH ELEMENT IN RESULT
		REPLACE (MAP) THE CHARACTER WITH THE CHARACTER DOUBLED i.e., "e" -> "ee"

	RETURN RESULT JOINED BACK INTO A STRING

repeater('Hello');        // "HHeelllloo"
["H", 'e', "l", "l", "o"] -> ["HH", "ee", 'll', 'll', 'oo']
-> "HHeelllloo"

repeater('Good job!');    // "GGoooodd  jjoobb!!"
["G", "o", "o", "d", " ", "j", "o", "b", "!"] ->
["GG", "oo", "oo", "dd", "  ", "jj", "oo", "bb", "!!"] ->
"GGoooodd  jjoobb!!"

repeater('');             // ""
[] -> [] -> ""
*/

function repeater(str) {
	let result = str.split("");
	
	return result.map(char => char + char).join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
console.log(repeater('   '));        	// 
console.log(repeater('!!)@(#%$'));     // 
