// LS216 Practice Problems
// Incrementing Rows and Columns

/*


*/

function final(rows, columns, operations) {
	let matrix = createMatrix(rows, columns);

	for (let operation of operations) {
		let index = operation[0];
		let vector  = operation[1];
		if (index >= rows || index >= columns) continue;

		if (vector === "r") {
			let row = matrix[index];
			for (let i = 0; i < row.length; i++) row[i]++;
		} else if (vector === "c") {
			for (let row of matrix) row[index]++;
		}
	}

	console.log(matrix);
}

function createMatrix(rows, columns) {
	let matrix = [];

	for (let row = 0; row < rows; row++) {
		let newRow = [];
		for (let column = 0; column < columns; column++) newRow.push(0);
		matrix.push(newRow);
	}

	return matrix;
}

final(3, 3, ["2r", "2c", "1r", "0c"])

// [
//   [1, 0, 1],
//   [2, 1, 2],
//   [2, 1, 2]
// ]

final(2, 2, ["0r", "0r", "0r", "1c"]) 
// ➞ [
//   [3, 4],
//   [0, 1]
// ]

final(2, 2, ["0c"]) 
// ➞ [
//   [1, 0],
//   [1, 0]
// ]

final(3, 3, ["0c", "1c", "1c", "2c", "2c", "2c"]) 
// ➞ [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]
// ]

final(3, 3, []) 
// ➞ [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]