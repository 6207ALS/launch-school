// JS210 Exercises | Easy 4
// Exercise 2 - Combining Arrays

/*
PROBLEM:
Write a function that takes two arrays as arguments and returns an array 
containing the union of the values from the two.

Input: 2 Arrays
Output: 1 Array

Rules:
	- There should be no duplication of values in the returned array, even if 
		there are duplicates in the original arrays.
	- You may assume that both arguments will always be arrays.
		- Assume arrays will contain only numbers (integers).
	- Assume both arrays will be sorted from least to greatest value
	- Arrays may be in different lengths
	- If both arrays are empty, return 1 empty array
		- If one array is empty, return the other array

TEST CASES:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
[1, 3, 5, 3, 6, 9] -> [1, 3, 5, 6, 9] -> sort [1, 3, 5, 6, 9]
let result = [1, 3, 5, 3, 6, 9]
let unique = [1, 3, 5, 6, 9];
unique.sort(callback)

union([1, 3, 12], [4, 6])    		// [1, 3, 4, 6, 12]
[1, 3, 12, 4, 6] -> [1, 3, 12, 4, 6] -> [1, 3, 4, 6, 12]
let result = [1, 3, 12, 4, 6]
let unique = [1, 3, 12, 4, 6];
unique.sort(callback)
unique = [1, 3, 4, 6, 12]

union([], [1, 2, 6])						// [1, 2, 6]
[1, 2, 6] -> [1, 2, 6] -> [1, 2, 6]

union([], [])										// []
[] -> [] -> []

REQUIREMENTS:
	- merge two arrays into single array
		- don't worry about duplicates for now
	- remove any duplicates from single array
	- sort the array

DATA STRUCTURE:
	ARRAY -> Abstraction methods (Filter, reduce, map)
	OBJECT

ALGORITHM:
	LET RESULT = MERGE TWO ARRAYS INTO SINGLE ARRAY
	REMOVE ANY DUPLICATES FROM RESULT
		FOR EACH ELEMENT IN RESULT (FILTER)
			IF ELEMENT HAS ALREADY APPEARED
				DO NOT ADD TO RESULTING ARRAY
			ELSE
				ADD TO RESULTING ARRAY

	SORT RESULT BY INCREASING ORDER
	RETURN RESULT
*/

function union(arr1, arr2) {
	let initialUnion = arr1.concat(arr2);
	let unique = initialUnion.filter((element, index) => {
		return index === initialUnion.indexOf(element);
	});

	return unique.sort((a, b) => a - b);
}

console.log(union([1, 3, 5], [3, 6, 9]));     // [1, 3, 5, 3, 6, 9]
console.log(union([1, 3, 12], [4, 6]));    		// [1, 3, 4, 6, 12]
console.log(union([], [1, 2, 6]));						// [1, 2, 6]
console.log(union([], []));										// []