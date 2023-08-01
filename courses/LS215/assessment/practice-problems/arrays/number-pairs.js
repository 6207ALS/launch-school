// LS216 Practice Problems
// Number Pairs

/*
https://edabit.com/challenge/fpHGmHoKX5RyD3wjQ

PROBLEM:
	Create a function that determines how many number pairs are embedded in a 
	space-separated string.

Input: String
Output: Number

Rules:
	- The first numeric value in the space-separated string represents the count 
		of the numbers, thus, excluded in the pairings.
	- Assume the string will only contain numbers separated by single whitespace.
		- Numbers will always be positive integers.
		- String will not contain any trailing or leading whitespace.
		- The count of numbers (excluding the first number) will always match the
			first number.
		- Numbers can have leading zeros. (leading zeros should be ignored when
			looking for pairs).
	- Assume the argument will always be a string.
		- The string will never be empty.
		- The string will always contain at least one number
			- If string only contains one number (first number), that number will 
				always be 0

TEST CASES:
number_pairs("7 1 2 1 2 1 3 2") ➞ 2
[7, 1, 2, 1, 2, 1, 3, 2] ->
[1, 2, 1, 2, 1, 3, 2]

unique values: [1, 2, 3] 

[1, 1, 1] -> 1 pair
[2, 2, 2] -> 1 pair
[3] 			-> 0 pair

number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// (10, 10), (20, 20), (10, 10)
[9, 10, 20, 20, 10, 10, 30, 50, 10, 20]
[10, 20, 20, 10, 10, 30, 50, 10, 20]

unique values: [10, 20, 30, 50]
[10, 10, 10, 10] -> 2 pairs
[20, 20, 20]		 -> 1 pair
[30]						 -> 0 pair
[50]						 -> 0 pair

number_pairs("4 2 3 4 1") ➞ 0
// Although two 4's are present, the first one is discounted.
[4, 2, 3, 4, 1]
[2, 3, 4, 1]
unique values: [2, 3, 4, 1]
[2]
[3]
[4]
[1]


number_pairs("0 ") ➞ 0
[0]
[]


REQUIREMENTS:
	- Split string argument into array with single whitespace character as 
		delimiter
	- Remove first element of array
	- Retrieve all unique values in array.
		- For each unique value, filter array with current value
		- Divide length of filtered array by 2, integer value is number of pairs
	- Return total number of pairs created

DATA STRUCTURE:
	- Array -> Abstraction Methods (Filter)

ALGORITHM:
	LET NUMS = STRING ARGUMENT SPLIT BY " " CHARACTER
	NUMS = NUM SLICED FROM INDEX 1 TO END
	LET UNIQUES = UNIQUE VALUES OF NUMS
	LET PAIRS = 0;

	FOR EACH UNIQUE IN UNIQUES
		FILTER NUMS WITH ONLY CURRENT UNIQUE VALUE
		PAIRS += INTEGER PORTION OF (LENGTH OF FILTERED ARR / 2)

	RETURN PAIRS
*/

function numberPairs(str) {
	let nums = str.split(" ").slice(1);
	let uniques = nums.filter((num, index) => nums.indexOf(num) === index);
	let numPairs = 0;

	for (let unique of uniques) {
		let uniqueOnly = nums.filter(num => num === unique);
		numPairs += Math.floor(uniqueOnly.length / 2);
	}

	return numPairs;
}

p = console.log;

p(numberPairs("7 1 2 1 2 1 3 2")) 
// ➞ 2

p(numberPairs("9 10 20 20 10 10 30 50 10 20")) 
// ➞ 3

p(numberPairs("4 2 3 4 1")) 
// ➞ 0

p(numberPairs("0"))
// ➞ 0

p(numberPairs("10 1 2 5 6 5 2 1 7 8 1"))
// ➞ 3

p(numberPairs("16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1"))
// ➞ 6

p(numberPairs("6 1 2 2 4 3 4"))
// ➞ 2