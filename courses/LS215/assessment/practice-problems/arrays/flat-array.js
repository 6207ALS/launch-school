// LS216 Practice Problems
// Flat Array Depth Nesting

/*
https://edabit.com/challenge/jThp2fAGWuwffsokZ

PROBLEM:
Create a function that can nest a flat array to represent an incremental depth 
level sequence.

Input: Array
Output: Array

RULES:
	- The elements do not matter to the function, you should increment by index.
		- Array will contain only primitive data types as elements: Numbers, Strings, etc.
		- Array will consist of only one data type at a time.
		- Expect the array length to be from 2-20.
	
	- Assume the argument will always be a single Array
	- Assume the Array will never be sparse.
	- Array can be mutated, if needed.
	- Array can contain duplicate values (though, not significant for this problem)
	- Increment depth level sequence:
		- Every subsequent element should be nested into a new array
	
TEST CASES:
incrementalDepth([1, 2]) // ➞ [1, [2]]

incrementalDepth([1, 2, 3, 4, 5]) // ➞ [1, [2, [3, [4, [5]]]]]

incrementalDepth([1, 3, 2, 6]) // ➞ [1, [3, [2, [6]]]]

incrementalDepth(["dog", "cat", "cow"]) // ➞ ["dog", ["cat", ["cow"]]]




*/

function incrementalDepth(arr) {
	if (arr.length === 1) return [arr[0]];

	return [arr[0], incrementalDepth(arr.slice(1))];
}

p = console.log;

p(incrementalDepth([1, 2, 3, 4, 5])) // ➞ [1, [2, [3, [4, [5]]]]]

p(incrementalDepth([1, 2])) // ➞ [1, [2]]

p(incrementalDepth([1, 3, 2, 6])) // ➞ [1, [3, [2, [6]]]]