// JS210 Exercises | Medium 2
// Exercise 5 - Next Featured Number Higher than a Given Value

/*
PROBLEM:
Write a function that takes an integer as an argument and returns the next 
featured number greater than the integer.

Input: Number
Output: Number

Rules:
	- A featured number (something unique to this problem):
		- An odd number
		- Is a multiple of 7
		- All of its digits occurring exactly once each.
	- Issue an error message if there is no next featured number.
		- The largest possible featured number is 9876543201.
	- Assume the argument will always be a number.
		- Assume the number will always be an integer greater or equal to 0.
	- Leading zeros should be ignored
		- Unless number is a single zero

TEST CASES:

featured(0)							// 7
1, 2, 3, 4, 5, 6, 7

featured(3)							// 7
4, 5, 6, 7

featured(12);           // 21
13, 14, 15, 16, 17, 18, 19, 20, 21

featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
Show Solution & Discussion

REQUIREMENTS:
	- start incrementing up from NUM_ARG
	- for each value, check if the value is a featured number
		- is odd number
		- is a multiple of 7
		- all digits are unique
	- if value is a featured number, return that number
	- if argument is 9876543201, return error message

DATA STRUCTURE:
	- Variables
	- Functions

ALGORITHM:
	IF ARGUMENT IS 9876543201
		RETURN "There is no possible number that fulfills those requirements."

	WHILE TRUE
		ARG++
		IF ARG IS_FEATURED_NUMBER
			RETURN ARG
	
IS_FEATURED_NUMBER(num)
	IF NUM IS ODD && MULTIPLE OF 7 && DIGITS ARE NOT ALL UNIQUE
		RETURN TRUE
	ELSE 
		RETURN FALSE
*/

function featured(num) {
	if (num === 9876543201) {
		return "There is no possible number that fulfills those requirements.";
	}

	while (true) {
		num++;
		if (isFeaturedNumber(num)) return num;
	}
}

function isFeaturedNumber(num) {
	return (isOdd(num) && isMultiple7(num) && isDigitsUnique(num)) 
}

function isOdd(num) {
	return num % 2 === 1;
}

function isMultiple7(num) {
	return num % 7 === 0;
}

function isDigitsUnique(num) {
	let digits = String(num).split("")
	return digits.every((digit, index) => digits.indexOf(digit) === index);
}

console.log(featured(0));            // 7
console.log(featured(3));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."