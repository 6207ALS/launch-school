// LS216 Practice Problems
// Simple Minesweeper

/*
https://edabit.com/challenge/cEGny3Pc8tjTfJryr

PROBLEM:
Given a 2D array of mines, replace the question mark with the number of mines 
that immediately surround it.

Input: Array
Output: Array

RULES:
	- Count of mines should account for diagonals.
		- In other words, it is possible for a ? to be surrounded by 8 mines maximum.
	- Assume the 2D array's elements will only be "-", "#", and "?"
		- An empty space: "-"
		- A mine: "#"
		- The area to sweep: "?"

	- Original array can be mutated, if needed.
	- Assume the argument will always be a single Array
		- You will only be given 3x3 grids.
			- Assume the array will only contain 3 Arrays as elements.
			- Every subarray will only contain 3 elements ("-", "#", or "?")
		- The question mark is not limited to the center. 
		- There may be multiple question marks.
	- Arrays will never be sparse.
	- Output array should replace every "?" in original array with number of 
		surrounding mines "#"
	- Some arguments may not have any questions marks at all.
	- Some arguments may not have any mines at all.

TEST CASES:
minesweeper([
  ["-", "#", "-"],
  ["-", "?", "-"],
  ["-", "-", "-"]
])

// [
//   ["-", "#", "-"],
//   ["-", "1", "-"],
//   ["-", "-", "-"]
// ]

minesweeper([
  ["-", "#", "-"],
  ["#", "-", "?"],
  ["#", "#", "-"]
])
// [
//   ["-", "#", "-"],
//   ["#", "-", "2"],
//   ["#", "#", "-"]
// ]

minesweeper([
  ["-", "#", "#"],
  ["?", "#", ""],
  ["#", "?", "-"]
]) 
// [
//   ["-", "#", "#"],
//   ["3", "#", ""],
//   ["#", "2", "-"]
// ]

minesweeper([
  ["-", "-", "#"],
  ["?", "-", "-"],
  ["-", "-", "-"]
]) 
// [
//   ["-", "-", "#"],
//   ["0", "-", "-"],
//   ["-", "-", "-"]
// ]

minesweeper([
  ["-", "-", "#"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]) 
// [
//   ["-", "-", "#"],
//   ["-", "-", "-"],
//   ["-", "-", "-"]
// ]

minesweeper([
  ["-", "-", "-"],
  ["?", "-", "-"],
  ["-", "-", "-"]
]) 
// [
//   ["-", "-", "-"],
//   ["0", "-", "-"],
//   ["-", "-", "-"]
// ]

REQUIREMENTS:
	- Map every row of grid
		- Map every element of row
			- If element is "?"
				- Retrieve all 8 surrounding elements (some will have undefined) into array
				- Return count of "#" characters in array
			- Else if element is "-" or "#"
				- Return element as is

DATA STRUCTURE:
	ARRAY

ALGORITHM:

	RETURN (MAP GRID (ROW, INDEX(I)))
		RETURN MAP ROW (ELEMENT, INDEX(J))
			IF ELEMENT IS "#"
				LET SURROUNDING_VALUES = []
				PUSH GRID[I - 1][J] TO SURROUNDING_VALUES
				PUSH GRID[I - 1][J + 1] TO SURROUNDING_VALUES
				PUSH GRID[I][J + 1] TO SURROUNDING_VALUES
				PUSH GRID[I + 1][J + 1] TO SURROUNDING_VALUES
				PUSH GRID[I + 1][J] TO SURROUNDING_VALUES
				PUSH GRID[I + 1][J - 1] TO SURROUNDING_VALUES
				PUSH GRID[I][J - 1] TO SURROUNDING_VALUES
				PUSH GRID[I - 1][J - 1] TO SURROUNDING_VALUES

				FILTER SURROUND_VALUES WITH ONLY "#" CHARACTERS
				RETURN COUNT OF FILTERED ARRAY
			ELSE
				RETURN ELEMENT
*/

function minesweeper(grid) {
	return grid.map((subArr, row) => {
		return subArr.map((element, column) => {
			if (element === "?") {
				let surroundingValues = [];
				surroundingValues.push((grid[row - 1] || [])[column]);
				surroundingValues.push((grid[row - 1] || [])[column + 1]);
				surroundingValues.push((grid[row] || [])[column + 1]);
				surroundingValues.push((grid[row + 1] || [])[column + 1]);
				surroundingValues.push((grid[row + 1] || [])[column]);
				surroundingValues.push((grid[row + 1] || [])[column - 1]);
				surroundingValues.push((grid[row] || [])[column - 1]);
				surroundingValues.push((grid[row - 1] || [])[column - 1]);
				return String(surroundingValues.filter(value => value === "#").length);
			} else {
				return element;
			}
		});
	});
}

p = console.log;

p(minesweeper([
  ["-", "#", "-"],
  ["-", "?", "-"],
  ["-", "-", "-"]
]))

// [
//   ["-", "#", "-"],
//   ["-", "1", "-"],
//   ["-", "-", "-"]
// ]

p(minesweeper([
  ["-", "#", "-"],
  ["#", "-", "?"],
  ["#", "#", "-"]
]))
// [
//   ["-", "#", "-"],
//   ["#", "-", "2"],
//   ["#", "#", "-"]
// ]

p(minesweeper([
  ["-", "#", "#"],
  ["?", "#", ""],
  ["#", "?", "-"]
])) 

// [
//   ["-", "#", "#"],
//   ["3", "#", ""],
//   ["#", "2", "-"]
// ]

p(minesweeper([
  ["-", "-", "#"],
  ["?", "-", "-"],
  ["-", "-", "-"]
])) 
// [
//   ["-", "-", "#"],
//   ["0", "-", "-"],
//   ["-", "-", "-"]
// ]

p(minesweeper([
  ["-", "-", "#"],
  ["-", "-", "-"],
  ["-", "-", "-"]
])) 
// [
//   ["-", "-", "#"],
//   ["-", "-", "-"],
//   ["-", "-", "-"]
// ]

p(minesweeper([
  ["-", "-", "-"],
  ["?", "-", "-"],
  ["-", "-", "-"]
])) 
// [
//   ["-", "-", "-"],
//   ["0", "-", "-"],
//   ["-", "-", "-"]
// ]