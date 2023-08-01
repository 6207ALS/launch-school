// LS216 Practice Problems
// Deep Arithmetic

/*
https://edabit.com/challenge/E8WcotHKRGfYodchW

PROBLEM:
Write a function that takes an array of strings of arbitrary dimensionality 
([], [][], [][][], etc.) and returns the sum of every separate number in each 
string in the array.

Input: Array
Output: Number

Rules: 
	- Assume the argument will always be a single array.
		- Arrays may be ragged or empty.
		- Arrays will never be sparse.
	- Assume the elements of arrays will always be strings
		- Not all elements will have digits in them.
		- Some strings may be only digits.
		- Strings can be empty.
		- Strings can contain letters, digits, special characters, etc.
	- Arrays can be mutated, if needed.

	- Numbers in strings can be negative, but will all be base-10 integers.
	- Negative numbers may directly follow another number.
	- The hyphen or minus character ("-") does not only occur in numbers.

TEST CASES:
sum(["1", "five", "2wenty", "thr33"]) ➞ 36
sum(["1", "five", "2wenty", "thr33-3"]) ➞ 33
sum(["1", "five", "2-wenty", "thr33-3"]) ➞ 33

sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099
sum([["1X2", "   "],["1024", "5", "64"]]) ➞ 1096

sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

[
	[
		["1"], 
		"10v3"
	],
	[
		"738h"
	],
	[
		["s0"],
		["1mu4ch3"],
		"-1s0"
	]
]

["1", "10v3"]
["738h"]
["s0", "1mu4ch3", "-1s0"]

REQUIREMENTS:
	- Flatten array argument into single 1-D array
	- Iterate through elements of 1-D array
	- Replace each element with sum of its digit values
	- Return sum of 1-D array values

DATA STRUCTURE:
	- Array -> Abstraction Methods (reduce)

ALGORITHM:

FLATTEN_ARRAY(ARR)
	IF EVERY ELEMENT IN ARR IS NOT AN ARRAY
		RETURN ARR
	
	LET NON_ARRAY_ELEMENTS = [ELEMENTS IN ARR THAT ARE NOT ARRAY]
	LET ARRAY_ELEMENTS = [ELEMENTS IN ARR THAT ARE VALUES]

	LET FLAT_ARRAY = NON_ARRAY_VALUES

	FOR EACH ARRAY_ELEMENTS
		FLAT_ARRAY = FLAT_ARRAY CONCATENATED WITH FLATTEN_ARRAY(ARRAY_ELEMENT)
*/

function flattenArray(arr) {
	if (arr.every(element => !Array.isArray(element))) return arr;

	let nonArrayElements = arr.filter(element => !Array.isArray(element));
	let arrayElements = arr.filter(element => Array.isArray(element));

	let flatArray = nonArrayElements;

	for (let array of arrayElements) {
		flatArray = flatArray.concat(flattenArray(array));
	}

	return flatArray;
}

function sum(arr) {
	let flattenedArray = flattenArray(arr);
	let digits = flattenedArray.map(str => str.match(/\-?\d+/g) || []);
	let sums = digits.map(values => values.reduce((acc, val) => Number(val) + acc, 0));
	return sums.reduce((acc, val) => acc + val, 0);
}

console.log(sum(["1", "five", "2wenty", "thr33"])); // ➞ 36
console.log(sum(["1", "five", "2wenty", "thr33-3"])); // ➞ 33
console.log(sum(["1", "five", "2-wenty", "thr33-3"])); // ➞ 33
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]])); // ➞ 1099
console.log(sum([["1X2", "   "],["1024", "5", "64"]])); // ➞ 1096
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])); // ➞ 759