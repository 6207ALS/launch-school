// JS210 Exercises | Easy 5
// Exercise 4 - Get the Middle Character

/*
PROBLEM:
Write a function that takes a non-empty string argument and returns the middle 
character(s) of the string.

Input: String
Output: String

Rules:
	- Assume the argument will always be a non-empty string.
	- If the string has an odd length, you should return exactly one character.
	- If the string has an even length, you should return exactly two characters.
	- Every character (including non-alphabetical characters) attribute to 
		string's length
		- Middle character can be non-alphabetical character, (i.e, " ", "!", "#")
	- Single character string should return the one character.

TEST CASES:
centerOf('I Love JavaScript'); // "a"
length: 17 (odd)
middle-index = 17 / 2 = 8.5 -> 8 (round down)

centerOf('Launch School');     // " "
length = 13 (odd)
middle-index = 13 / 2 = 6.5 -> 6 (round down)

centerOf('Launch');            // "un"
length = 6 (even)
middle-index = 6 / 2 = 3
str[middle-index], str[middle-index - 1]

centerOf('Launchschool');      // "hs"
length = 12 (even)
middle-index = 12 / 2 = 6
str[middle-index], str[middle-index - 1] 

centerOf('x');                 // "x"
length = 1 (odd)
middle-index = 1 / 2 = 0.5 -> 0 (round down)

REQUIREMENTS:
	- determine the length of string
	- calculate the "middle-index"
		- (length of string / 2) ROUNDED DOWN
	- if the length of string is odd
		- return middle index of string
	- if length of string is even
		- return characters from (middle-index - 1) to (middle-index)

DATA STRUCTURE:
	STRING

ALGORITHM:
	LET LENGTH = LENGTH OF STRING
	LET MIDDLE_INDEX = ROUND DOWN (LENGTH / 2)

	IF LENGTH IS ODD NUMBER
		RETURN STRING[MIDDLE_INDEX]
	ELSE
		RETURN STRING SLICED FROM [MIDDLE_INDEX - 1] TO [MIDDLE_INDEX] (INCLUSIVE)
*/

function centerOf(str) {
	let length = str.length;
	let middleIndex = Math.floor(length / 2);

	if (length % 2 === 1) {
		return str[middleIndex];
	} else {
		return str.slice(middleIndex - 1, middleIndex + 1);
	}
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"