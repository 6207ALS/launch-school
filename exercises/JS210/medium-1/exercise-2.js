// JS210 Exercises | Medium 1
// Exercise 2 - Rotation Part 2

/*
PROBLEM:
Write a function that rotates the last n digits of a number. For the rotation, 
rotate by one digit to the left, moving the first digit to the end.

Input: 2 Numbers
Output: Number

Rules:
	- The second argument determines how many of the last digits of the first
		argument are rotated.
	- Assume the arguments will always be numbers (integers)
	- Assume the second argument will always be less than or equal to the number
		of digits of the first argument.
	- Ignore any leading zeros in the resulting number

TEST CASES:
// Standard
rotateRightmostDigits(735291, 0);      // 735291
"735291", ""
"" -> [] -> [] -> ""
"735291" + ""

rotateRightmostDigits(735291, 1);      // 735291
"73529", "1"
"1" -> [ 1 ] -> [ 1 ] -> "1"
"73529" + "1"

rotateRightmostDigits(735291, 2);      // 735219
"7352", "91"
"91" -> [9, 1] -> [1, 9] -> "19"
"7352" + "19"

rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
"", "735291"
[7, 3, 5, 2, 9, 1] -> [3, 5, 2, 9, 1, 7]
"" + "352917"

// Leading Zeros
rotateRightmostDigits(705291, 6);      // 52917
"", "705291"
[7, 0, 5, 2, 9, 1] -> [0, 5, 2, 9, 1, 7]
"" + "052917"

rotateRightmostDigits(10, 2);      		 // 1

// Zero
rotateRightmostDigits(0, 1);      		 // 0
"", "0"
[0] -> [0]
"" + "0"

REQUIREMENTS:
	- CONVERT NUMBER INTO STRING
	- SLICE STRING TO FIRST HALF AND SECOND HALF
	- FIRST HALF IS ENTIRE STRING **EXCLUDING** LAST N CHARACTERS OF STRING
	- SECOND HALF IS LAST N CHARACTERS OF STRING
	- SPLIT SECOND HALF BY CHARACTER INTO ARRAY
	- ROTATE SECOND HALF ARRAY
	- COMBINE FIRST HALF AND (SECOND HALF JOINED BACK INTO STRING)
	- CONVERT RESULT BACK INTO NUMBER

DATA STRUCTURE:
	ARRAY -> rotateArray(), concatenation

ALGORITHM:
	NUMBER = NUMBER CONVERTED INTO STRING
	LET FIRST HALF = ENTIRE STRING **EXCLUDING** LAST N CHARACTERS OF STRING
	LET SECOND HALF = LAST N CHARACTERS OF STRING

	SECOND HALF = SPLIT SECOND HALF BY CHARACTER INTO ARRAY
	SECOND HALF = ROTATE SECOND HALF ARRAY
	SECOND HALF = JOIN SECOND HALF BACK INTO STRING

	RESULT = FIRST_HALF CONCATENATED WITH SECOND_HALF
	RETURN RESULT CONVERTED INTO NUMBER
*/

function rotateArray(arr) {
	if (!Array.isArray(arr)) return undefined;
	let result = arr.slice();
	return result.slice(1).concat(result.slice(0, 1));
}

function rotateRightmostDigits(number, n) {
	number = String(number);
	let firstHalf = number.slice(0, number.length - n);
	let secondHalf = rotateArray(number.slice(-n).split("")).join("");
	let result = Number(firstHalf + secondHalf);
	return result;
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(705291, 6));      // 52917
console.log(rotateRightmostDigits(10, 2));      		// 1
console.log(rotateRightmostDigits(0, 1));      		 	// 0