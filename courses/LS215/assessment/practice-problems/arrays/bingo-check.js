// LS216 Practice Problems
// Bingo Check

/*
https://edabit.com/challenge/fwXjqY6drw8eLGyfQ

PROBLEM:
Create a function that takes a 5x5 2D array and returns true if it has at least 
one Bingo, and false if it doesn't.

Input: Array
Output: Boolean

Rules:
	- Bingo: If all 5 values of any of the board's columns, rows, or diagonals are 
					 "x"s.
	- Only check for diagonals, horizontals and verticals.
	- Assume the argument will always be an Array (5 x 5)
		- Array argument will always contain 5 Arrays as elements
		- Every subarray will contain 5 elements: either a positive Integer or "x"
			- There can be multiple "x"s in a single subarray.
		- None of the arrays will ever be sparse.
		- Arrays can be mutated, if needed.
	- Board can have multiple bingos.

TEST CASES:
bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) // ➞ true

bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) // ➞ true

bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) // ➞ true

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) // ➞ false

bingoCheck([
  [45, 10, 31, 74, 87],
  [64, 78, 47, 42, 90],
  [37, 12, 68, 83, 54],
  [67, 31, 98, 27, 44],
  [21, 49, 24, 30, 52]
]) // ➞ false

bingoCheck([
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"]
]) // ➞ true

REQUIREMENTS:
	- Iterate through all columns of board, check if any column has bingo
		- All values of a column must be "x"
	- Iterate through all rows of board, check if any column has bingo
		- All values of a row must be "x"
	- Check diagonals (top-left -> bottom-right AND top-right -> bottom-left)
		- All values of a diagonal must be "x"
		
	- If any of the steps above return "true", function should return true. 

DATA STRUCTURE:
	ARRAY

ALGORITHM:

BINGO_CHECK(BOARD)
	RETURN HAS_ROW_BINGO(BOARD) OR HAS_COLUMN_BINGO(BOARD) OR HAS_DIAGONAL_BINGO(BOARD)
		
HAS_ROW_BINGO(BOARD)
	FOR EVERY SUBARR OF BOARD
		IF EVERY VALUE IN SUBARR IS "x"
			RETURN TRUE

	RETURN FALSE

HAS_COLUMN_BINGO(BOARD)
	FOR VALUES 0 TO LAST INDEX OF A SUBARR (I)
		LET COLUMN = []
		FOR EVERY SUBARR OF BOARD (J)
			PUSH BOARD[J][I] TO COLUMN
		IF EVERY VALUE IN COLUMN IS "x"
			RETURN TRUE

	RETURN FALSE

HAS_DIAGONAL_BINGO(BOARD)
	LET TOP_LEFT_INDEXES = [0, 1, 2, 3, 4]
	LET TOP_RIGHT_INDEXES = [4, 3, 2, 1, 0]

	LET TOP_LEFT_VALUES = []
	LET TOP_RIGHT_VALUES = []

	FOR EVERY SUBARR OF BOARD (I)	
		PUSH BOARD[I][TOP_LEFT_INDEXES[I]] TO TOP_LEFT_VALUES
		PUSH BOARD[I][TOP_RIGHT_INDEXES[I]] TO TOP_RIGHT_VALUES
	
	RETURN (EVERY VALUE IN TOP_LEFT_VALUES IS "X" OR EVERY VALUE IN TOP_RIGHT_VALUES IS "X")
*/

function bingoCheck(board) {
	return (hasRowBingo(board) || hasColumnBingo(board) || hasDiagonalBingo(board));
}

function hasRowBingo(board) {
	for (let row of board) {
		if (row.every(value => value === "x")) return true
	}

	return false;
}

function hasColumnBingo(board) {
	for (let column = 0; column < board[0].length; column++) {
		let columnValues = [];
		for (let row = 0; row < board.length; row++) {
			columnValues.push(board[row][column]);
		}
		if (columnValues.every(value => value === "x")) return true;
	}

	return false;
}

function hasDiagonalBingo(board) {
	let topLeftIndexes = [0, 1, 2, 3, 4];
	let topRightIndexes = [4, 3, 2, 1, 0];

	let topLeftValues = [];
	let topRightValues = [];

	for (let row = 0; row < 5; row++) {
		topLeftValues.push(board[row][topLeftIndexes[row]]);
		topRightValues.push(board[row][topRightIndexes[row]]);
	}

	return (topLeftValues.every(value => value === "x") || 
					topRightValues.every(value => value === "x"));
}

p = console.log;

p(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
])) // ➞ true

p(bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
])) // ➞ true

p(bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
])) // ➞ true

p(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
])) // ➞ false

p(bingoCheck([
  [45, 10, 31, 74, 87],
  [64, 78, 47, 42, 90],
  [37, 12, 68, 83, 54],
  [67, 31, 98, 27, 44],
  [21, 49, 24, 30, 52]
])) // ➞ false

p(bingoCheck([
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x"]
])) // ➞ true