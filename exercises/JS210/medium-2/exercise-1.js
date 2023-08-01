// JS210 Exercises | Medium 2
// Exercise 1 - Lettercase Percentage Ratio

/*
PROBLEM:
Write a function that takes a string and returns an object containing three 
properties.

Input: String
Output: Object

Rules:
	- The object's three properties should be:
		- the percentage of characters in the string that are lowercase letters
			- key of "lowercase"
		- the percentage of characters that are uppercase letters
			- key of "uppercase"
		- the percentage of characters that are neither (non-alphabetical characters)
			- key of "neither"
	- Values for every key in object should be a string representing the
		percentage.
			- Percentage should be rounded to two decimal places.
	- Assume that the string will always contain at least one character.
	- Assume that the argument will always be a string.

TEST CASES:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
{
	"lowercase": "50.00",
	"uppercase": "10.00",
	"neither": "40.00"
}

length: 10
lower: 5
upper: 1
neither: 4

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentage("a")
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

REQUIREMENTS:
	- Determine the length of string
	- Initialize a tally for each type of character (lowercase, uppercase, neither)
	- Iterate through the characters of string
		- Determine the type of character (lowercase, uppercase, neither)
		- Increment tally for appropriate category
	
	- Create object to be returned
	- Assign properties ("lowercase", "uppercase", "neither")
		- Value is (TALLY[CATEGORY] / LENGTH OF STRING)
		- Be sure to format value as string, two decimal places

DATA STRUCTURE:
	- Object
	- String -> Iterate characters
	- Variables

ALGORITHM:
	LET LENGTH = STRING ARGUMENT LENGTH
	LET LOWER_COUNT = 0
	LET UPPER_COUNT = 0
	LET NEITHER_COUNT = 0

	FOR EACH CHARACTER OF STRING
		IF CHARACTER IS LOWERCASE LETTER
			LOWER_COUNT++
		IF CHARACTER IS UPPERCASE LETTER
			UPPER_COUNT++
		ELSE
			NEITHER_COUNT++
	
	RETURN {
		"lowercase": (LOWER_COUNT / LENGTH) AS A STRING PROPERLY FORMATTED,
		"uppercase": (UPPER_COUNT / LENGTH) AS A STRING PROPERLY FORMATTED,
		"neither": (NEITHER_COUNT / LENGTH) AS A STRING PROPERLY FORMATTED 
	}
*/

function letterPercentages(str) {
	let length = str.length;
	let lowerCount = 0;
	let upperCount = 0;
	let neitherCount = 0;

	str.split("").forEach(char => {
		if (/[a-z]/.test(char)) {
			lowerCount++;
		} else if (/[A-Z]/.test(char)) {
			upperCount++;
		} else {
			neitherCount++;
		}
	});

	let lowercase = String(((lowerCount / length) * 100).toFixed(2));
	let uppercase = String(((upperCount / length) * 100).toFixed(2));
	let neither = String(((neitherCount / length)* 100).toFixed(2));

	return { lowercase, uppercase, neither };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages("a"));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }