// LS216 Practice Problems
// Is the Array Circular?

/*
https://edabit.com/challenge/TfL5ffvWoEgsoRhuP

PROBLEM:
Write a function that determines if an array is circular.

Input: Array
Output: Boolean

RULES:
	- Circular Array: An array with subarrays that can be reordered such that 
						 				each subarray's last element is equal to the next 
										subarray's first element.
	- In a circular re-ordering, the last subarray's last element must be 
		identical to the first subarray's first element.

	- Assume the argument will always be a single Array.
	- Elements of the Array will always be subarrays.
		- Array will always have at least 2 subarrays.
	- Elements of the subarrays will always be Integers.
		- Subarrays will contain at least one Integer.
			- The one Integer is considered both the subarray's first and last element.
		- Integers will be positive or 0.
		- There can be duplicate Integers, both in individual subarrays and 
			throughout all subarrays.

	- Subarrays could vary in length.
	- Array (and subarrays) will never be sparse.
	- Array (and subarrays) can be mutated, if needed.

TEST CASES:

isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]) // ➞ true
// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]

isCircular([[1, 1], [1, 2]]) // ➞ false

isCircular([[2, 1], [1, 2]]) // ➞ true

isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]) // ➞ false

isCircular([[2][2, 3, 2]]) // ➞ true

isCircular([[2][2][2]]) // ➞ true

isCircular([[2][2][3]]) // ➞ false

REQUIREMENTS:
	- Iterate through every permutation of array argument's elements.
	- For each permutation, determine if elements are circular
	- If any permutation has circular elements, return true
*/

function isCircular(arr) 
{
	var first = [];
	var last = [];
	for (var i = 0; i < arr.length; i++)
	{
		first.push(arr[i][0]);
		last.push(arr[i][arr[i].length-1]);
	}
	first.sort((a,b) => a-b);
	last.sort((a,b) => a-b);
	for (var i = 0; i < first.length; i++)
	{
	  if (first[i] != last[i]) return false;		
	}
	return true;
}