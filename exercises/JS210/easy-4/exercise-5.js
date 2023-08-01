// JS210 Exercises | Easy 4
// Exercise 5 - Combine Two Lists

/* 
PROBLEM:
Write a function that combines two arrays passed as arguments, and returns a 
new array that contains all elements from both array arguments, with each 
element taken in alternation.

Input: 2 Arrays
Output: 1 Array

Rules:
	- Assume that both input arrays are non-empty
	- Assume that both arrays have the same number of elements.
	- Each element should be taken in alternation (starting with the first element 
		of the first array argument)
	- Array arguments should NOT be mutated
	- Array has elements of a single data type
		- Elements can be any data type.

TEST CASES:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
[1, 'a', 2, "b", 3, "c"], 

interleave([[], [], []], ['a', 'b', 'c']);
[[], 'a', [], 'b', [], 'c']

REQUIREMENTS:
	- INITIALIZE RESULT ARRAY
	- ITERATE THROUGH EVERY INDEX OF BOTH ARRAYS
	- PUSH ELEMENTS FROM BOTH ARRAYS TO RESULT ARRAY
		- ELEMENT FROM FIRST ARRAY ARGUMENT SHOULD BE PUSHED FIRST
	- RETURN RESULT ARRAY

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET RESULT = [];

	FOR INDEXES 0 TO END OF EITHER ARRAY
		PUSH ARR1[INDEX] TO RESULT
		PUSH ARR2[INDEX] TO RESULT

	RETURN RESULT;
*/

function interleave(arr1, arr2) {
	let result = [];

	for (let i = 0; i < arr1.length; i++) {
		result.push(arr1[i]);
		result.push(arr2[i]);
	}

	return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave([[], [], []], ['a', 'b', 'c']));