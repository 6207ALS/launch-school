// LS216 Practice Problems
// Maximum and Minimum Product Triplets

/*
https://edabit.com/challenge/zEFP5c8ZshTXRfgYb

PROBLEM:
Write two functions:
	- One that returns the maximum product of three numbers in an array.
	- One that returns the minimum product of three numbers in an array.

Input: Array
Output: Number

RULES:
	- One that returns the maximum product of three numbers in an array.
		- Largest possible product
	- One that returns the minimum product of three numbers in an array.
		- Smallest possible product 

	- Product must be product of 3 unique elements in array. Elements cannot be
		repeated when calculating product.
	- Both functions' argument will be a single Array.
	- Array will only contain Integers as elements
		- Integers can be negative, positive or 0s.

	- Array will always contain at least 3 elements.
	- Array argument can be mutated, if needed.
	- Array argument will never be sparse.
	- Array argument could contain duplicate values.
	- Array could be all positive integers / all negative integers / all 0s.

TEST CASES:

// general examples
maxProduct([-8, -9, 1, 2, 7]) // ➞ 504
maxProduct([-8, 1, 2, 7, 9]) // ➞ 126
minProduct([1, -1, 1, 1]) // ➞ -1
minProduct([-5, -3, -1, 0, 4]) // ➞ -15

max: -8 * -9 * 1 => 72
-8 * -9 * 1
-8 * -9 * 2
-8 * -9 * 7
-8 * 1 * 2
-8 * 1 * 7
-8 * 2 * 7

-9 * 1 * 2
-9 * 1 * 7
-9 * 2 * 7

1 * 2 * 7

// smallest possible length of array
maxProduct([1, -1, 1]) // ➞ -1
minProduct([1, -1, 1]) // ➞ -1

// all positive numbers
maxProduct([2, 2, 2, 2]) // ➞ 8
minProduct([2, 2, 2, 2]) // ➞ 8

// all negative numbers
maxProduct([-2, -2, -2, -2]) // ➞ -8
minProduct([-2, -2, -2, -2]) // ➞ -8

// all 0s
maxProduct([0, 0, 0, 0]) // ➞ 0
minProduct([0, 0, 0, 0]) // ➞ 0


REQUIREMENTS:
	- For max, declare "max" variable to record largest possible product
		- initialize with the product of first three elements in array
	- For min, declare "min" variable to record smallest possible product 
		- initialize with the product of first three elements in array

	- For both functions, iterate through every possible combination of 3 unique
		elements (not permutation) in array.
		- For each combination, calculate the product of the 3 elements.
		- For max, if product is greater than "max" variable, reassign "max" to product
		- For min, if product is less than "min" variable, reassign "min" to product

	- Return max / min

DATA STRUCTURE:
	ARRAY

ALGORITHM:

	LET MAX / MIN = PRODUCT OF FIRST THREE ELEMENTS OF ARR

	FOR I IN RANGE OF 0 TO (3RD-TO-LAST INDEX OF ARRAY)
		FOR J IN RANGE OF (I + 1) TO (2ND-TO-LAST INDEX OF ARRAY)
			FOR Z IN RANGE OF (J + 1) TO (LAST INDEX OF ARRAY)
				LET PRODUCT = ARR[I] * ARR[J] * ARR[Z]
				
				**FOR MAX
					IF PRODUCT > MAX
						MAX = PRODUCT

				** FOR MIN
					IF PRODUCT < MIN
						MIN = PRODUCT

	RETURN MAX / MIN
*/

function maxProduct(nums) {
	let max = nums[0] * nums[1] * nums[2];

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let z = j + 1; z < nums.length; z++) {
				let product = nums[i] * nums[j] * nums[z];
				if (product > max) max = product;
			}
		}
	}

	return max;
}

function minProduct(nums) {
	let min = nums[0] * nums[1] * nums[2];

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let z = j + 1; z < nums.length; z++) {
				let product = nums[i] * nums[j] * nums[z];
				if (product < min) min = product;
			}
		}
	}

	return min;
}

p = console.log;

// general examples
p(maxProduct([-8, -9, 1, 2, 7])) 			// ➞ 504
p(maxProduct([-8, 1, 2, 7, 9])) 				// ➞ 126
p(minProduct([1, -1, 1, 1])) 					// ➞ -1
p(minProduct([-5, -3, -1, 0, 4])) 			// ➞ -15

// smallest possible length of array
p(maxProduct([1, -1, 1])) // ➞ -1
p(minProduct([1, -1, 1])) // ➞ -1

// all positive numbers
p(maxProduct([2, 2, 2, 2])) // ➞ 8
p(minProduct([2, 2, 2, 2])) // ➞ 8

// all negative numbers
p(maxProduct([-2, -2, -2, -2])) // ➞ -8
p(minProduct([-2, -2, -2, -2])) // ➞ -8

// all 0s
p(maxProduct([0, 0, 0, 0])) // ➞ 0
p(minProduct([0, 0, 0, 0])) // ➞ 0