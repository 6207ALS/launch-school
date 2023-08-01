// LS216 Practice Problems
// Diagonal Snake from a Rectangular Matrix

/*
https://edabit.com/challenge/eGTrKXoDFGsvFCJsT

PROBLEM:
	Given an matrix, return the numbers in the pattern of a "diagonal" snake.

Input: Array
Output: Array

RULES:
	- The first diagonal begins at [0][0]
	- The second diagonal 

*/

function diagonalSnake(matrix) {
	if (matrix.length === 0) return [];
	let pointerRow = 0;
	let pointerColumn = 0;
	let values = [];
	let isUpwards = true;
	let numColumns = matrix[0].length - 1;
	let numRows = matrix.length - 1;

	while (pointerRow <= numRows && pointerColumn <= numColumns) {
		values.push(matrix[pointerRow][pointerColumn]);

		if (isUpwards) {
			pointerRow--;
			pointerColumn++;
		} else {
			pointerRow++;
			pointerColumn--;
		}

		if ((matrix[pointerRow] || [])[pointerColumn] === undefined) {
			if (isUpwards) {
				if (pointerColumn > numColumns) {
					pointerRow += 2;
					pointerColumn--;
				} else {
					pointerRow++;
				}
			} else {
				if (pointerRow > numRows) {
					pointerColumn += 2
					pointerRow--;
				} else {
					pointerColumn++;
				}
			}
			isUpwards = !isUpwards;
		}
	}
	return values;
}
p = console.log;

p(diagonalSnake([
  [1, 2, 3, 11],
  [4, 5, 6, 12],
  [7, 8, 9, 13],
	[14, 15, 16, 17]
])) 
// ➞ [1, 2, 4, 7, 5, 3, 6, 8, 9]

p(diagonalSnake([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])) 
// ➞ [1, 2, 4, 7, 5, 3, 6, 8, 9]

p(diagonalSnake([[3], [2]])) // ➞ [3, 2]

p(diagonalSnake([[9]])) // ➞ [9]

p(diagonalSnake([])) // ➞ []

p(diagonalSnake([[9, 8, 7]])) // ➞ [9, 8, 7]