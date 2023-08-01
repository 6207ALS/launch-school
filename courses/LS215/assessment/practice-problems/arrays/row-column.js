// LS216 Practice Problems
// Identical Row and Column

/*
https://edabit.com/challenge/MXbibjS95Y8X4wDZx

PROBLEM:
	Write a function that returns true if there exists a row that is identical to 
	a column in a 2-D matrix, otherwise false.

Input: Array
Output: Boolean 

Rules:
	- Non-square (M X N) matrices should return false.
	- Assume argument will always be a single array.
		- Assume array argument will only contain subarrays as elements.
		- Assume subarrays will only contain integers as values.
		- Subarrays can contain duplicate values.
		- Assume all subarrays will be same lengths.
			- Assume integers can be 0, negative, or positive.
		- Assume array argument / subarrays will never be empty.
			- Smallest valid dimension of 2D array is 1 x 1
				- Return true if dimension is 1 x 1
		- Assume array argument / subarrays will never be sparse.
	- Any non-primitive data types (array) can be mutated, if needed.
	- Matrix can have multiple rows with identical columns.

	- Columns should ONLY be read from top-bottom
	- Rows should ONLY be read from left-right

TEST CASES:

// General example WITH identical column/row
hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) 
// ➞ true
[
	[4, 2, 5, 6]
	[4, 4, 4, 4]
	[4, 9, 7, 1]
	[4, 8, 7, 0]
]


// General example WITHOUT identical column/row
hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) 
// ➞ false

[
	[4, 2, 5, 6]
	[4, 1, 4, 4]
	[9, 9, 7, 1]
	[4, 8, 7, 0]
]


// Matrix can contain negative integers
hasIdentical([
  [ 4, -4, 9]
  [-4,  1, 4]
  [ 5,  4, 7]
]) 
// ➞ true

[
	[4, -4, 5]
	[-4, 1, 4]
	[9, 4, 7]
]

// Small matrix WITHOUT identical column/row
hasIdentical([
  [4, 4]
  [2, 1]
]) 
// ➞ false

// Small matrix WITH identical column/row
hasIdentical([
  [4, 2]
  [2, 1]
]) 
// ➞ true

// Matrix MUST be square. Cannot be M X N
hasIdentical([
  [4, 2]
  [2, 1]
	[2, 1]
]) 
// ➞ false

// Smallest matrix dimension: 1x1
hasIdentical([
  [1]
]) 
// ➞ true

[
	[1]
]

// Columns must be read from top-bottom
// Rows must be read from left-right
hasIdentical([
  [1, 2, 3, 4],
  [3, 4, 2, 1],
  [8, 9, 4, 2],
  [6, 8, 1, 0]
])
// ➞ false

REQUIREMENTS:
	- Initialize empty array to contain all columns
	- If # of rows is not equal to # of columns in matrix, return false
	- Iterate through columns of matrix argument, pushing each column to column_array
	- For each subarray (row) of matrix, check if its identical to any of the columns
		in column_array
		- Check every element of row, compare it with element of column at each
			corresponding index.
		- If any column is identical to row, return true

	- Default, end return value is false.

DATA STRUCTURE:
	Array

ALGORITHM:
	IF (LENGTH OF ARRAY ARGUMENT !== LENGTH OF SUBARRAY)
		RETURN FALSE

	LET COLUMNS = []
	
	FOR INDEX 0 => LAST INDEX OF SUBARRAY
		LET COLUMN = []
		FOR EACH SUBARRAY IN ARRAY ARGUMENT
			PUSH SUBARRAY[INDEX] TO COLUMN
		PUSH COLUMN TO COLUMNS

	FOR EVERY SUBARRAY IN ARRAY ARGUMENT
		IF ANY OF THE COLUMNS ARE IDENTICAL TO CURRENT ROW
			RETURN TRUE

	RETURN FALSE

ARE_IDENTICAL(ARR1, ARR2)
	FOR INDEX 0 TO LAST INDEX OF ARR1
		LET ARR1_VALUE = ARR1[INDEX]
		LET ARR2_VALUE = ARR2[INDEX]
		IF (ARR1_VALUE IS NOT EQUAL TO ARR2_VALUE)
			RETURN FALSE

	RETURN TRUE
*/

function hasIdentical(arr) {
	if (arr.length !== arr[0].length) return false;

	let columns = returnColumns(arr);
	
	for (let subArr of arr) {
		if (columns.some(column => areEqual(column, subArr))) return true;
	}

	return false;
}

function returnColumns(arr) {
	let columns = [];
	for (let i = 0; i < arr[0].length; i++) {
		let column = [];
		for (let subArray of arr) column.push(subArray[i]);
		columns.push(column);
	}
	return columns;
}

function areEqual(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		let arr1Value = arr1[i];
		let arr2Value = arr2[i];
		if (arr1Value !== arr2Value) return false;
	}
	return true;
}

p = console.log;

// General example WITH identical column/row
p(hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]))
// ➞ true

// General example WITHOUT identical column/row
p(hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) )
// ➞ false


// Matrix can contain negative integers
p(hasIdentical([
  [ 4, -4, 9],
  [-4,  1, 4],
  [ 5,  4, 7],
])) 
// ➞ true

// Small matrix WITHOUT identical column/row
p(hasIdentical([
  [4, 4],
  [2, 1],
])) 
// ➞ false

// Small matrix WITH identical column/row
p(hasIdentical([
  [4, 2],
  [2, 1],
])) 
// ➞ true

// Matrix MUST be square. Cannot be M X N
p(hasIdentical([
  [4, 2],
  [2, 1],
	[2, 1],
]));
// ➞ false

// Smallest matrix dimension: 1x1
p(hasIdentical([
  [1]
])) 
// ➞ true

// Columns must be read from top-bottom
// Rows must be read from left-right
p(hasIdentical([
  [1, 2, 3, 4],
  [3, 4, 2, 1],
  [8, 9, 4, 2],
  [6, 8, 1, 0]
]))
// ➞ false