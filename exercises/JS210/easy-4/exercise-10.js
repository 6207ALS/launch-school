// JS210 Exercises | Easy 4
// Exercise 19 - Array Average

/*
PROBLEM:
Write a function that takes one argument, an array containing integers, and 
returns the average of all the integers in the array, rounded down to the 
integer component of the average.

Input: Array
Output: Number

Rules:
	- The array will never be empty
	- The numbers will always be positive integers
	- The average should be rounded down to the integer component
	- The function should take one argument, an array containing integers
	- Function may mutate array argument if needed
	- Assume array will never be sparse i.e., [1, , 3, 4, 5]


TEST CASES:
average([1, 5, 87, 45, 8, 8]);       // 25
1 + 5 + 87 + 45 + 8 + 8 = 154 / 6 = 25.6 -> 25

average([9, 47, 23, 95, 16, 52]);    // 40

REQUIREMENT:
	- CALCULATE THE SUM OF VALUES IN ARRAY
	- DIVIDE SUM BY LENGTH OF ARRAY
	- ROUND DOWN RESULT TO NEAREST INTEGER

DATA STRUCTURE:
	-> ARRAY - Abstraction methods (reduce, filter, map)

ALGORITHM:
	LET SUM = SUM OF VALUES OF ARRAY (REDUCE)
	LET AVERAGE = SUM / LENGTH OF ARRAY
	
	RETURN AVERAGE ROUNDED DOWN TO NEAREST INTEGER (MATH.FLOOR)
*/

function average(arr) {
	let sum = arr.reduce((acc, val) => acc + val, 0);
	let average = sum / arr.length;

	return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40