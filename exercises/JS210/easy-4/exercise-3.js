// JS210 Exercises | Easy 4
// Exercise 3 - Halvsies

/*
PROBLEM:
Write a function that takes an array as an argument and returns an array that 
contains two elements, each of which is half of the array argument.

Input: 1 Array
Output: 1 Array (2 subarrays)

Rules:
	- Put the first half of the original array elements in the first element of 
		the return value.
	- Put the second half in the second element.
	- If the original array contains an odd number of elements, place the middle 
		element in the first half array.
	- Assume elements of argument array will just be numbers
	- If given an empty array, still return an array with 2 subarrays
	- Array can be mutated if required in implementation.

TEST CASE:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
4 / 2 = 2 middle index
[1, 2] = first half
[3, 4] = second half
result = [[1, 2], [3, 4]]

[].slice(i1, i2)

halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
5 / 2 = ROUNDUP(2.5) = 3 
[1, 5, 2] = first half
[4, 3] = second half
[[1, 5, 2], [4, 3]]

[].slice(i1, i2)

halvsies([5]);                // [[5], []]
1 / 2 = ROUND UP(0.5) = 1
[5] = first half
[] = second half
[[5], []]

halvsies([]);                 // [[], []]
0 / 2 = ROUNDUP(0) = 
[] = first
[] = second
[[], []]

[] -> slice array from 0, 0 -> []
			slice from 1 -> 


REQUIREMENTS:
	- CALCULATE MIDDLE INDEX -> ROUND UP (LENGTH OF ARRAY / 2)
	- FIRST_HALF = SLICE ARRAY FROM 0 INDEX TO MIDDLE INDEX (INCLUSIVE)
	- SECOND_HALF = SLICE ARRAY FROM (MIDDLE_INDEX + 1) TO END OF ARRAY
	- PUSH BOTH HALVES TO EMPTY ARRAY []

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET MIDDLE_INDEX + ROUND UP (LENGTH OF ARRAY / 2);
	LET FIRST_HALF = SLICE ARRAY FROM 0 INDEX TO MIDDLE INDEX (INCLUSIVE)
	SECOND_HALF = SLICE ARRAY FROM (MIDDLE_INDEX) TO END OF ARRAY

	RETURN BOTH HALVES PUSHED INTO [];
*/

function halvsies(arr) {
	let middleIndex = Math.ceil(arr.length / 2);
	let firstHalf = arr.slice(0, middleIndex);
	let secondHalf = arr.slice(middleIndex);

	return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

