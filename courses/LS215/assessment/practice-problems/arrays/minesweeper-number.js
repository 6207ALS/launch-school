// LS216 Practice Problems
// Minesweeper Number of Neighbouring Mines

/*
https://edabit.com/challenge/Hs9MayvcfE7gHzuLT

PROBLEM:
Create a function that takes an array representation of a Minesweeper board,
and returns another board where the value of each cell is the amount of its 
neighbouring mines.

Input: Array
Output: Array

RULES:
	- The Number 0 in the board represents an empty space.
		- Each 0 in the board should be replaced with the number of neighbouring
			mines.
	- The Number 1 in the board represents a mine.
		- Each 1 in the board should be replaced with 9.

	- Assume the argument will always be a single Array.
	- Assume the Array argument will only contain subarrays as elements.
		- Array will always contain at least 1 subarray (will never be empty)
	- Assume the subarrays will only contain 1s and 0s as elements.
		- Subarrays will always contain at least 1 element (will never be empty)
		- All subarrays will have the same number of elements. (same length)
	- Arrays (and subarrays) will never be sparse.
	- Arrays (and subarrays) will never be empty.
	- Arrays (and subarrays) can be mutated, if needed.
	- The output array does not have to be the original array.

	- Board could contain only 0s.
	- Board could contain only 1s.
	- Neighbouring mines: mines that are immediately adjacent to the current space
												(including diagonals)
	- An empty space could not have any neighbouring mines.

TEST CASES:
minesweeperNumbers([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
])

// [
//   [1, 9, 2, 1],
//   [2, 3, 9, 2],
//   [3, 9, 4, 9],
//   [9, 9, 3, 1],
// ]

minesweeperNumbers([
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
])

// [
//   [9, 9, 9],
//   [2, 5, 9],
//   [0, 2, 9],
// ]


minesweeperNumbers([
  [0],
  [0],
  [0],
  [1],
])

// [
//   [0],
//   [0],
//   [1],
//   [9],
// ]

minesweeperNumbers([
  [0, 1, 0, 0],
])

// [
//   [1, 9, 1, 0],
// ]

minesweeperNumbers([
  [0],
])

// [
//   [0],
// ]

minesweeperNumbers([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
])

// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

minesweeperNumbers([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
])

// [
//   [9, 9, 9],
//   [9, 9, 9],
//   [9, 9, 9],
// ]

REQUIREMENTS:
	- initialize an empty array to represent the result board
	- iterate through each subarray of array argument
		- initialize new empty array for result board
		- iterate through each element of subarray
			- if element is number 1, push 9 to new array
			- else, retrieve all immediate neighbouring elements at current index
				- count how many of neighbors are 1s
				- push bount to new array
		- push new array to result board array

	- return board array

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET RESULT_BOARD = [];

	FOR INDEXES OF ARRAY_ARG (ROW)
		LET SUBARRAY = ARRAY_ARG[ROW]
		LET NEW_ARR = []
		FOR INDEXES OF SUBARRAY (COLUMN)
			IF ELEMENT AT ARRAY_ARG[ROW][COLUMN] IS 1
				PUSH 9 TO NEW_ARR
			ELSE
				LET NEIGHBORS = []
				PUSH ELEMENT AT ARRAY_ARG[ROW - 1][COLUMN] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW - 1][COLUMN + 1] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW][COLUMN + 1] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW + 1][COLUMN + 1] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW + 1][COLUMN] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW][COLUMN - 1] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW][COLUMN - 1] TO NEIGHBORS
				PUSH ELEMENT AT ARRAY_ARG[ROW - 1][COLUMN - 1] TO NEIGHBORS
				FILTER NEIGHBORS WITH ONLY 1s
				PUSH LENGTH OF FILTERED ARRAY TO NEW_ARR
		PUSH NEW_ARR TO RESULT BOARD

	RETURN RESULT_BOARD
*/

function minesweeperNumbers(board) {
	let resultBoard = [];

	for (let row = 0; row < board.length; row++) {
		let newRow = [];
		for (let column = 0; column < board[0].length; column++) {
			let currentElement = board[row][column];
			if (currentElement === 1) {
				newRow.push(9);
			} else {
				let neighbors = [];
				neighbors.push((board[row - 1] || [])[column]);
				neighbors.push((board[row - 1] || [])[column + 1]);
				neighbors.push((board[row - 1] || [])[column - 1]);
				neighbors.push((board[row] || [])[column - 1]);
				neighbors.push((board[row] || [])[column + 1]);
				neighbors.push((board[row + 1] || [])[column]);
				neighbors.push((board[row + 1] || [])[column + 1]);
				neighbors.push((board[row + 1] || [])[column - 1]);
				let numNeighborMines = neighbors.filter(val => val === 1).length;
				newRow.push(numNeighborMines);
			}
		}
		resultBoard.push(newRow);
	}

	return resultBoard;
}

p = console.log;

p(minesweeperNumbers([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]))

// [
//   [1, 9, 2, 1],
//   [2, 3, 9, 2],
//   [3, 9, 4, 9],
//   [9, 9, 3, 1],
// ]

p(minesweeperNumbers([
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
]))

// [
//   [9, 9, 9],
//   [2, 5, 9],
//   [0, 2, 9],
// ]


p(minesweeperNumbers([
  [0],
  [0],
  [0],
  [1],
]))

// [
//   [0],
//   [0],
//   [1],
//   [9],
// ]

p(minesweeperNumbers([
  [0, 1, 0, 0],
]))

// [
//   [1, 9, 1, 0],
// ]

p(minesweeperNumbers([
  [0],
]))

// [
//   [0],
// ]

p(minesweeperNumbers([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]))

// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

p(minesweeperNumbers([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]))

// [
//   [9, 9, 9],
//   [9, 9, 9],
//   [9, 9, 9],
// ]