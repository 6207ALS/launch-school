// LS216 Assessment - Interview Practice Problems: Asking Questions
// Problem 4

/*
PROBLEM:
Write a function that takes a two-dimensional array as the argument and turns it
into a flat array with all duplicated elements removed.

Input: Array
Output: Array

Rules:
	- Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep 
		the one that comes first in the result.
	- Assume the function will always be provided a single argument: an array
	- Assume every element of array argument is an array
	- 2D array can contain other data types (Booleans, Arrays, Objects)
		- Pass the reference of non-primitive data types to flat array
		- Non-primitive data types are duplicates if their references are the same.
	- Assume none of the arrays will be sparse
	- Empty array argument should return empty array
	- Output array does not need to be sorted
	- Do not mutate original array argument.
	- Any whitespace in a number string is ignored.

TEST CASES:
	flattenAndUnique([]); 															 // []
	flattenAndUnique([], []]); 													 // []
	flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); 		 // [1, 2, 3, 4, 5, 'a']
	[1, 2, 3, 4, 5, "a"]

	flattenAndUnique([[1, 2, 3, []], [[], '3', 4, 5, 'a']]); // [1, 2, 3, [], [], 4, 5, 'a']
	[1, 2, 3, [], [], 4, 5, "a"]

	flattenAndUnique([[1, 2, '3', []], [3, 4, 5, 'a']]); // [1, 2, "3", [], 4, 5, 'a']
	[1, 2, "3", [], [], 4, 5, "a"]

	flattenAndUnique([[1, 2, '3', true], [3, 4, 5, 'a']]); // [1, 2, "3", true, 4, 5, 'a']
	[1, 2, "3", true, 4, 5, "a"]

REQUIREMENTS:
	- Iterate through subarrays of array argument
		- Iterate through elements of each subarray

	- If data type of current element is Number or String (string number), check 
		if its Number or String version exists in result array
		- If it exists in result array, do not add current element to result array

	- If current element exists in result array, do not add element to result array

DATA STRUCTURE:
	ARRAY

ALGORITHM:

	LET FLAT_ARRAY = [];

	FOR EACH SUBARRAY OF ARRAY ARGUMENT
		FOR EACH ELEMENT OF SUBARRAY
			IF ELEMENT'S DATA TYPE IS NUMBER OR IS A NUMBER_STRING
				IF ELEMENT'S NUMBER OR NUMBER_STRING EXISTS IN FLAT_ARRAY
					CONTINUE TO NEXT ELEMENT OF SUBARRAY
				ELSE 
					PUSH ELEMENT TO FLAT_ARRAY
			ELSE
				IF ELEMENT IS IN FLAT_ARRAY
					CONTINUE TO NEXT ELEMENT OF SUBARRAY
				ELSE
					PUSH ELEMENT TO FLAT_ARRAY

	RETURN FLAT_ARRAY
*/

function flattenAndUnique(arr) {
	let flatArr = [];

	for (let subArr of arr) {
		for (let element of subArr) {
			if (isNumberOrNumberString(element)) {
				if (flatArr.includes(Number(element)) || flatArr.includes(String(element))) {
					continue;
				}
			} else {
				if (flatArr.includes(element)) {
					continue;
				}
			}

			flatArr.push(element);
		}
	}

	return flatArr;
}

function isNumberOrNumberString(element) {
	return (typeof element === "number") || 
				 (typeof element === "string") && !Number.isNaN(Number(element));
}

console.log(flattenAndUnique([])); 															 			// []
console.log(flattenAndUnique([[], []])); 													 		// []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); 		 			// [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, 3, []], [[], '3', 4, 5, 'a']])); 	// [1, 2, 3, [], [], 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, '3', []], [3, 4, 5, 'a']])); 			// [1, 2, "3", [], 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, '3', true], [3, 4, 5, 'a']])); 		// [1, 2, "3", true, 4, 5, 'a']

