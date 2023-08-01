// JS210 Exercises | Medium 1
// Exercise 3 - Rotation Part 3

/*
PROBLEM:
Write a function that takes an integer as an argument and returns the maximum 
rotation of that integer. 

Input: Number
Output: Number

Rules:
	- You can (and probably should) use the rotateRightmostDigits function from 
		the previous exercise.
	- Maximum Rotation:
			1. Rotate the entire number as is.
			2. Take the result from step 1, 
				 keep the first digit fixed,
				 and rotate the remaining digits
			3. Take the result from step 2,
				 keep the first 2 digits fixed,
				 and rotate the remaining digits
			4. Continue the process until every "substring" of the number
				 has been rotated.
	- Leading zeros at any point should be dropped.
	- Assume any argument will always be a integer (including zero)
	
TEST CASES:
maxRotation(735291);          // 321579
735291 -> 352917
3, 52917 -> 329175
32, 9175 -> 321759
321, 759 -> 321597
3215, 97 -> 321579
32157, 9 -> 321579

maxRotation(3);               // 3
3 -> 3

maxRotation(0); 							// 0
0 -> 0

maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
105 -> 051 -> 51
_, 51 -> 15
1, 5 -> 15

maxRotation(8703529146);      // 7321609845

REQUIREMENTS:
	- Rotate number (length of number) times
		- Begin with rotating the entire number
		- Decrement the number of last digits rotated by 1 each time (5, 4, 3, 2, 1)
	- Return the resulting number

DATA STRUCTURE:
	NUMBERS

ALGORITHM:
	FOR I IN RANGE OF (LENGTH OF NUMBER) -> 1
		NUMBER = ROTATE-RIGHT-DIGITS(NUMBER, I)

	RETURN NUMBER
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

function maxRotation(num) {
	for (let i = String(num).length; i >= 1; i--) {
		num = rotateRightmostDigits(num, i);
	}

	return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845