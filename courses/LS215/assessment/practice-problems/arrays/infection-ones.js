// LS216 Practice Problems
// Infection of the ones

/*
https://edabit.com/challenge/wtPATmEY9xQCpzWNT

PROBLEM:
Write a function that replaces every row and column that contains at least one 
1 into a row/column that is filled entirely with 1s.

Input: Array
Output: Array

RULES:
	- You must mutate the original array.
 	- Minimum dimension of matrix will be 1 x 1.

	- Assume the argument will always be a single Array.
	- Assume the elements of the Array will always be subarrays.
		- Every subarray will have the same length.
	- Assume the elements of the subarrays will always be either be 1 or 0
		- Some subarrays could be all 1s, some subarrays could be all 0s.
	- None of the arrays will be sparse.

TEST CASES:
onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
])

// [
//   [1, 1, 1],
//   [0, 0, 1],
//   [0, 0, 1]
// ]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
])

// [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 0]
// ]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
])

// [
//   [1, 1, 1, 1],
//   [0, 1, 0, 1],
//   [1, 1, 1, 1]
// ]

onesInfection([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
])

// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]


onesInfection([
  [0]
])

// [
// 	[0]
// ]

onesInfection([
  [1]
])

// [
// 	[1]
// ]


REQUIREMENTS:
	- Make a deep copy of the original matrix.
		- This copy will be used to reference back to the original matrix

	- Iterate through every row of matrix copy
		- If some value in a row is 1, reassign every element in original row to 1

	- Iterate through every column of matrix copy
		- If some value in a column is 1, reassign every value in original column to 1.

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET MATRIX_COPY = COPY_MATRIX(MATRIX_ARG)

	FOR EVERY SUBARRAY OF MATRIX_COPY (INDEX = I)
		IF ANY VALUE IN SUBARRAY IS 1
			FOR EVERY INDEX OF MATRIX_ARG[I] (INDEX = J)
				MATRIX[I][J] = 1

	FOR I IN RANGE (0 => LAST INDEX OF MATRIX_COPY[0]) (I)
		LET COLUMN_VALUES = [];
		FOR EVERY SUBARRAY OF MATRIX_COPY (J)
			PUSH MATRIX_COPY[J][I] TO COLUMN_VALUES

		IF ANY VALUE IN COLUMN_VALUES IS 1
			FOR EVERY SUBARRAY OF MATRIX_ARG (J)
				MATRIX_ARG[J][I] = 1

	RETURN MATRIX


MATRIX_COPY (MATRIX_ARG)
	LET MATRIX = []
	FOR EVERY SUBARRAY OF MATRIX_ARG
		LET ROW = []
		FOR EVERY VALUE OF SUBARRAY
			PUSH VALUE TO ROW
		PUSH ROW TO MATRIX
	RETURN MATRIX
*/

function onesInfection(matrix) {
	let matrixCopy = makeCopy(matrix);

	for (let row = 0; row < matrixCopy.length; row++) {
		if (matrixCopy[row].some(value => value === 1)) {
			for (let i = 0; i < matrix[row].length; i++) {
				matrix[row][i] = 1;
			}
		}
	}

	for (let column = 0; column < matrixCopy[0].length; column++) {
		let columnValues = [];
		for (let row = 0; row < matrixCopy.length; row++) {
			columnValues.push(matrixCopy[row][column]);
		}
		
		if (columnValues.some(value => value === 1)) {
			for (let row = 0; row < matrix.length; row++) {
				matrix[row][column] = 1;
			}
		}
	}

	return matrix;
}

function makeCopy(matrix) {
	return matrix.map(row => row.slice());
}

p = console.log;

p(onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]));

// [
//   [1, 1, 1],
//   [0, 0, 1],
//   [0, 0, 1]
// ]

p(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]));

// [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 0]
// ]

p(onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]));

// [
//   [1, 1, 1, 1],
//   [0, 1, 0, 1],
//   [1, 1, 1, 1]
// ]

p(onesInfection([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]));

// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]


p(onesInfection([
  [0]
]));

// [
// 	[0]
// ]

p(onesInfection([
  [1]
]));

// [
// 	[1]
// ]