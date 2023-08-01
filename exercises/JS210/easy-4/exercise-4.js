// JS210 Exercises | Easy 4
// Exercise 4 - Find the Duplicate

/*
PROBLEM:
Write a function that will find and return the duplicate value that is in the 
array.

Input: Array
Output: Number

Rules:
	- Array is unordered
	- Assume that exactly one value in the array occurs twice
		- every other value occurs exactly once
	- Assume all values of array are numbers
	- Assume array is non-empty and will always have a duplicate value

TEST CASES:
findDup([1, 5, 3, 1]);                                // 1
record = {1: true, 5: true, 3: true};
1


findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73



filter(), indexOf() === current_index

findDup([1, 1])																				// 1

REQUIREMENTS:
	- ITERATE THROUGH ELEMENTS OF ARRAY
	- KEEP RECORD OF ITERATED ELEMENTS
	- FOR EACH ELEMENT CHECK IF IT APPEARS IN RECORD
		- IF ELEMENT APPEARS IN RECORD, RETURN THAT VALUE

DATA STRUCTURE:
	ARRAY -> ABSTRACTION METHODS -> (FILTER) -> PROCESS HEAVY
	OBJECT -> RECORD VALUES	-> MEMORY HEAVY

ALGORITHM:
	LET RECORD = {};
	FOR EACH ELEMENT OF ARRAY
		IF ELEMENT NOT IN RECORD
			CREATE NEW KEY/VALUE PAIR FOR ELEMENT IN RECORD
		ELSE
			RETURN ELEMENT
*/

function findDup(arr) {
	let record = {};

	for (let value of arr) {
		if (!record[value]) {
			record[value] = true;
		} else {
			return value;
		}
	}
}


console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([2, 2]));																				// 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73