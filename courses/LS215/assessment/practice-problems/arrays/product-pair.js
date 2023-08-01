// LS216 Practice Problems
// A Product Pair

/*
https://edabit.com/challenge/S69CGXXeNp7J89ZLy

PROBLEM;
Create a function that takes an array of integers arr and a positive integer k 
and returns the minimum and maximum possible product of k elements taken from 
the array.

Input: Array, Number
Output: Array

Rules:
	- If enough elements are not available in the array, return null.
		- If k is greater than the length of the array, return null.
	- Assume arguments will always be an Array and a Number (in that order)
		- Array will only contain Integers (positive, negative, or 0)
		- If array is empty, return null.
		- Array can be sparse.
		- Array can be mutated, if needed.
		- Array can contain duplicate values.
		- Number argument will always be a positive integer.
			- Number argument could be greater than the length of the Array argument.

TEST CASES:
productPair([1, -2, -3, 4, 6, 7], 1) // ➞ [-3, 7]
min: -3
max: 7

productPair([1, -2, -3, 4, 6, 7], 2) // ➞ [-21, 42]
// -3*7, 6*7
-3
7



productPair([1, -2, -3, 4, 6, 6, 7], 2) // ➞ [-21, 42]
// -3*7, 6*7

productPair([1, -2, -3, 4, 6, 7], 3) // ➞ [-126, 168]
// -3*6*7, 4*6*7
-3
7

productPair([1, 2, 3, 4, 6, 7], 3) // ➞ [6, 168]
// 1 * 2 * 3 = 6
// 4 * 6 * 7 = 168
1
7



productPair([1, -2, -3, 4, 6, 7], 7) // ➞ null
// There are only 6 elements in the array


productPair([], 4) // ➞ null


REQUIREMENTS:


*/