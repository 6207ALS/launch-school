// LS216 Assessment - Interview Practice Problems: Asking Questions
// Problem 2

/*
PROBLEM:
Given an array of integers, nums, return the third largest number in the array.

Input: Array
Output: Number

Rules:
	- If the third largest number does not exist, return the greatest number.
	- Duplicate values are considered the same value
	- You are not allowed to sort the array.
	- Assume all elements in array are integers.
	- Assume array will always have at least one element. 
	- Assume the function will always take in one argument, the array
	- Assume array will not be sparse ([1,,3,4])
	- Do not mutate array argument.

TEST CASES:
	thirdMax([3, 3, 2, 1]); // 1
	thirdMax([3, 3, 3]); 		// 3
	thirdMax([3, 2, 1]); 		// 1
	thirdMax([2]); 			 		// 2
	thirdMax([3, 2]); 	 		// 3

REQUIREMENTS:
	- filter array by unique values only
	- remove the highest value element in array 3 times
		- if array is empty at any iteration, return the greatest value in result array
	- sort the result array
	- return last element in array

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET RESULT = []

	FILTER ARRAY BY UNIQUE VALUES ONLY

	FOR 3 TIMES
		IF ARRAY ARGUMENT IS EMPTY
			RETURN GREATEST VALUE IN RESULT
		REMOVE HIGHEST VALUE IN ARRAY ARGUMENT, ADD ELEMENT TO RESULT ARRAY

	SORT THE RESULT ARRAY DECREASING ORDER
	RETURN LAST ELEMENT IN ARRAY
*/

function thirdMax(arr) {
	let result = [];
	arr = arr.slice().filter((element, index) => arr.indexOf(element) === index);
	
	for (let i = 0; i < 3; i++) {
		if (arr.length === 0) return Math.max(...result);
		result.push(...(arr.splice(arr.indexOf(Math.max(...arr)), 1)));
	}

	result.sort((a, b) => a - b);
	return result[0];
}

console.log(thirdMax([5, 3, 3, 2, 1])); // 2
console.log(thirdMax([3, 3, 2, 1])); 		// 1
console.log(thirdMax([3, 3, 3])); 			// 3
console.log(thirdMax([3, 2, 1])); 			// 1
console.log(thirdMax([2])); 			 			// 2
console.log(thirdMax([3, 2])); 	 				// 3