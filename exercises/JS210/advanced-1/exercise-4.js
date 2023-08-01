// JS210 Exercises | Advanced 1
// Exercise 4 - Rotating Matrices

/*

[1, 5, 8],
[4, 7, 2],
[3, 9, 6],

[3, 4, 1], 
[9, 7, 5], 
[6, 2, 8]

[3, 7, 4, 2],
[5, 1, 0, 8],

[
	[5, 3], 
	[1, 7], 
	[0, 4], 
	[8, 2]
]

- ACCESS EVERY SUBARRAY OF MATRIX
- ITERATE THROUGH THE COLUMNS OF MATRIX (LEFT TO RIGHT)
- FOR EACH COLUMN, RECORD THE VALUES OF EACH ROW (BOTTOM TO TOP)
	- RECORDED VALUES ARE FOR THE NEW MATRIX'S ROW

*/

function rotate90(matrix) {
	let newMatrix = [];

	for (let i = 0; i < matrix[0].length; i++) {
		let row = [];
		for (let j = matrix.length - 1; j >= 0; j--) {
			row.push(matrix[j][i]);
		}
		newMatrix.push(row);
	}

	return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]