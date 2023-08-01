// JS210 Exercises | Easy 2
// Exercise 9 - Clean Up the Words

/*
PROBLEM:
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces.

Input: String
Output: String

Rules:
  - If one or more non-alphabetic characters occur in a row, you should only
    have one space in the result (i.e., the result string should never have
    consecutive spaces).
  - Assume argument will always be string
  - Empty string argument should return empty string
  - Preserve letter-casing

TEST CASES:
cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("hellochad");                 // "hellochad"
cleanUp("-2358#304$09");              // " "
cleanUp("   ");                       // " "
cleanUp(" ");                         // " "
cleanUp("");                          // ""

REQUIREMENT:
  - Condense 1 or more sequence of non-alphabetical characters into a single space character
  - Regex
  - String.prototype.replaceAll();
  - Preserve alphabetical characters
  - Preserve letter-casing

DATA STRUCTURES:
  - STRINGS

ALGORITHM:
	STRING = REPLACE ALL SEQUENCES OF ONE OR MORE NON-ALPHABETICAL CHARACTERS 
	WITH SINGLE SPACE CHARACTER
	
	RETURN STRING
*/

function cleanUp(str) {
	return str.replaceAll(/[^a-z]+/ig, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("hellochad"));                 // "hellochad"
console.log(cleanUp("-2358#304$09"));              // " "
console.log(cleanUp("   "));                       // " "
console.log(cleanUp(" "));                         // " "
console.log(cleanUp(""));                          // ""