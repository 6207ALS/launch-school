// JS210 Exercises | Advanced 1
// Exercise 2 - Transpose 3x3

/*
PROBLEM:
Write a function that takes an array of arrays that represents a 3x3 matrix and 
returns the transpose of the matrix.

Input: 1 Array
Output: 1 Array

Rules:
	- A 3x3 matrix can be represented by an array of arrays: an outer array 
		containing three subarrays that each contain three elements.
	- The transpose of a 3x3 matrix is the matrix that results from exchanging the
		rows and columns of the original matrix.
	- You should implement the function on your own, without using any external
		libraries.
	- Do NOT modify the original matrix.
		- your function must produce a new matrix and leave the input matrix array 
			unchanged.
	
	- Assume the argument will always a 3x3 matrix, which, in code, is represented
		as an array containing three subarrays that each contain three elements.
	- Assume the elements will always be numbers.
		- Assume array will be proper 
		- (not sparse, length is 3, and always valid values)
	
TEST CASES:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

newMatrix = [
	[1, 4, 3],
	[5, 7, 9],
	[8, 2, 6]
]

[1, 4]

const newMatrix = transpose(matrix);
matrix[0][2], matrix[1][2] matrix[2][2]
[
	[1, 4, 3],
	[5, 7, 9],
	[8, 2, 6]
]

[
	[5, 7, 9]
]

[1, 5, 8]
[4, 7, 2]
[3, 9, 6]

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

REQUIREMENTS:
	- ACCESS EVERY SUBARRAY OF MATRIX
	- ITERATE THROUGH THE COLUMNS OF MATRIX (LEFT TO RIGHT)
	- FOR EACH COLUMN, RECORD THE VALUES OF EACH ROW (TOP TO BOTTOM)
		- RECORDED VALUES ARE FOR THE NEW MATRIX'S ROW

DATA STRUCTURE:
	- ARRAY -> SUBARRAY

ALGORITHM:
	LET NEW_MATRIX = [];
	FOR EACH INDEX OF SUBARRAY
		LET ROW = []
		ITERATE THROUGH EACH SUBARRAY OF ARRAY
			PUSH VALUE OF ELEMENT AT CURRENT INDEX TO ROW
		PUSH ROW TO NEW_MATRIX
*/

function transpose(matrix) {
	let newMatrix = [];

	for (let column = 0; column < matrix[0].length; column++) {
		let newRow = [];

		for (let row = 0; row < matrix.length; row++) {
			newRow.push(matrix[row][column]);
		}

		newMatrix.push(newRow);
	}

	return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]