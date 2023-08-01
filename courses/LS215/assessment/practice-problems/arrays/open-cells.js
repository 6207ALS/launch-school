// LS216 Practice Problems
// Open All Cells If Possible

/*
https://edabit.com/challenge/yK2m5hpQAcMoo2P9d

PROBLEM:
Given an array of cells, return a Boolean indicating if every cell can be
opened with the keys found in the cells.

Input: Array
Output: Boolean

RULES:
	- Each cell is marked by their index in the array.
	- Each cell contains keys - as list of integers - to other cells in the list.
	- In the beginning, only cell 0 is open; that is where you find first keys 
		to other cells.
		- Open those cells and find new keys again.
		- Go open other cells with new keys.
		- Keep on repeating opening new cells while you discover new keys.
	- It is possible that a cell contains keys to already open cells.
	- Cells can contain the key to itself.
	- It is possible that cell 0 has no keys.

	- Assume the argument will always be a single Array.
		- Assume the array argument will only have subarrays as elements.
			- Array argument will always have at least 2 subarrays.
		- Assume the subarrays only have integers as elements.
			- Range of possible integer values are [0, N - 1] (N = number of cells)
			- Subarrays can be empty.
			- Subarrays can contain duplicate values, both in individual subarrays
				and across all subarrays.
	- None of the arrays will be sparse.
	- Arrays can be mutated, if needed.

TEST CASES:

openAll([[], [1], [2, 3]]) ➞ false
// Cell_0 has no keys. No other cell can be opened.

openAll([[1], [0]]) ➞ true
// Cell_0 has a key to cell_1. It is possible to open all two cells.

availableCells = 2
openedCells = [0, 1];
openedCell = false
collectedKeys = [0, 1];
currentCell = 0

[1]


openAll([[1], [2], [3], []]) ➞ true
// The placement allows to open all cells in a row.

availableCells = 4
openedCells = [0, 1, 2, 3];
openedCell = false
collectedKeys = [0, 1, 2, 3];
currentCell = 2

[1] [2] [3] []


openAll([[1, 3], [3, 0, 1], [2], [0]]) ➞ false
// It is not possible to open cell_2.

availableCells = 4
openedCells = [0, 1, 3];
openedCell = false
collectedKeys = [0, 1, 3];
currentCell = 3

[1, 3] [3, 0, 1] [0]


openAll([[2, 1], [1], [2], [4], [0, 1]]) ➞ false, "open only 0, 1, 2"
// It is possible to open only cells 0, 1, 2. Cells 3, 4 stay closed.

availableCells = 5
openedCells = [0, 2, 1];
openedCell = true
collectedKeys = [0, 2, 1];
currentCell = 1

[2, 1] [2] [1]


REQUIREMENTS:
	- Calculate number of cells in array
	- Initialize empty array to contain all cell numbers that were opened
	- Initialize Boolean value to true to determine if a cell has previously been opened
		- This value is the condition for a while loop
	- Initialize empty array to contain all collected cell keys.
	- Initialize a variable with value of 0 to reference with cell you should
		inspect in current while-loop

	- While a cell has been previously opened
		- Iterate through all keys at current cell.
		- Push all keys that aren't in collected-keys to collected-keys
		- Next, iterate through all values of collected-keys
			- If current key is not in opened-cells
				- Push key to opened-cells
				- Declare that a cell has been opened ("true")
				- Reassign the current cell to the current key
				- Continue to next loop iteration
		-	If you iterate through all values of collected-keys and all of them were
			found in openedCells, declare that a cell has not been opened ("false")

	- Determine if the number of openedCells is equal to the number of availableCells

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET NUM_CELLS = LENGTH OF ARR_ARG
	LET OPENED_CELLS = [0]
	LET OPENED_CELL = TRUE
	LET COLLECTED_KEYS = [0]
	LET CURRENT_CELL = 0

	WHILE OPENED_CELL
		LET CELL = ARR_ARG[CURRENT_CELL]
		FOR EACH KEY OF CELL
			IF KEY NOT IN COLLECTED_KEYS
				PUSH KEY TO COLLECTED_KEYS
		
		FOR EACH KEY OF COLLECTED_KEYS
			IF KEY NOT IN OPENED_CELLS
				PUSH KEY TO OPENED_CELLS
				CURRENT_CELL = KEY
				CONTINUE
		
		OPENED_CELL = FALSE

	RETURN NUM_CELLS = LENGTH OPENED_CELLS
*/

function openAll(arr) {
	let numCells = arr.length;
	let openedCells = [0];
	let openedCell = true;
	let collectedKeys = [0];
	let currentCell = 0;
 
	while (openedCell) {
		let cell = arr[currentCell];
		for (let key of cell) {
			if (!collectedKeys.includes(key)) collectedKeys.push(key);
		}

		let unusedKey = collectedKeys.find(key => !openedCells.includes(key));
		if (unusedKey !== undefined) {
			openedCells.push(unusedKey);
			currentCell = unusedKey;
			continue;
		} else {
			openedCell = false;
		}
	}

	return numCells === openedCells.length;
}

p = console.log;

p(openAll([[1], [0]])) //➞ true
// Cell_0 has a key to cell_1. It is possible to open all two cells.

p(openAll([[1], [2], [3], []])) // ➞ true
// The placement allows to open all cells in a row.

p(openAll([[1, 3], [3, 0, 1], [2], [0]])) // ➞ false
// It is not possible to open cell_2.

p(openAll([[2, 1], [1], [2], [4], [0, 1]]) )// ➞ false, "open only 0, 1, 2"
// It is possible to open only cells 0, 1, 2. Cells 3, 4 stay closed.

