// JS210 Exercises | Easy 2
// Exercise 10 - What Century is That

/*
PROBLEM:
Write a function that takes a year as input and returns the century.

Input: Number
Output: String

Rules:
	- The return value should be a string that begins with the century number, 
		and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
	- New centuries begin in years that end with 01.
		- the years 1901 - 2000 comprise the 20th century.
	- Assume all numbers will be a positive integer

TEST CASES:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

	1: st
	2: nd
	3: rd
	4: th
	5: th
	6: th
	7: th
	8: th
	9: th
	10: th
	11: th
	12: th
	13: th
	21: st
	22: nd
	23: rd


REQUIREMENTS:
	- DETERMINE CENTURY: ROUND UP (DIVIDE NUMBER BY 100)
	- DETERMINE THE "SUFFIX" OF CENTURY NUMBER
		- NUMBERS ENDING IN 1 GET "st"
		- NUMBERS ENDING IN 2 GET "nd"
		- NUMBERS ENDING IN 3 GET "rd"
		- NUMBERS ENDING IN ANY OTHER DIGIT GET "th"

DATA STRUCTURE:
	VARIABLES

ALGORITHM:
	LET CENTURY = ROUND UP (ARGUMENT / 100)

	LOOK AT LAST TWO DIGITS OF CENTURY
	IF LAST TWO DIGITS ARE "11", "12", or "13"
		RETURN CENTURY + "TH"
	ELSE IF LAST DIGIT IS 1
		RETURN CENTURY + "ST"
	ELSE IF LAST DIGIT IS 2
		RETURN CENTURY + "ND"
	ELSE IF LAST DIGIT IS 3
		RETURN CENTURY + "RD"
	ELSE
		RETURN CENTURY + "TH"
*/

function century(year) {
	let century = Math.ceil(year / 100);
	let lastDigit = String(century).slice(-1);
	let lastTwoDigits = String(century).slice(-2);

	if (["11", "12", "13"].includes(lastTwoDigits)) {
		return `${century}th`;
	} else if (lastDigit === "1") {
		return `${century}st`;
	} else if (lastDigit === "2") {
		return `${century}nd`;
	} else if (lastDigit === "3") {
		return `${century}rd`;
	} else {
		return `${century}th`;
	}
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"