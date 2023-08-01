// LS216 Practice Problems
// Battleship field validator

/*
https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

PROBLEM:
Write a method that takes a field for well-known board game "Battleship" as an 
argument and returns true if it has a valid disposition of ships, false 
otherwise.

Input: Array
Output: Boolean

Rules:
	- VALID DISPOSITION OF SHIPS:
			- 1 battleship (size of 4 cells), 
			- 2 cruisers (size 3), 
			- 3 destroyers (size 2)
			- 4 submarines (size 1). 
	- Any additional ships are not allowed, as well as missing ships.
	- No ship will be larger than 4 cells
	- Argument is guaranteed to be 10 x 10 two-dimension array.
		- Arrays will never be sparse.
		- Arrays can be mutated, if needed.
		- Elements in the array are either numbers 0 or 1
				- 0 if the cell is free.
				- 1 if occupied by ship.
	- Each ship must be a straight line, except for submarines, which are just 
		single cell.
 	- The ship cannot overlap or be in contact with any other ship, neither by 
		edge nor by corner.

TEST CASES:

// valid battlefield
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// true

// extra battleship (submarine (5, 0))
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// false

// missing battleship (3 submarines / 4)
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// false

// Battleships must be straight line (Cruiser is l-shape (middle))
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])

// battleships overlap ( Cruiser overlaps Destroyer)
validateBattlefield([
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// false

// battleships overlap at side ( Submarine next to Cruiser)
validateBattlefield([
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// false

// battleship at corner of another ( Submarine corner of Cruiser)
validateBattlefield([
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])
// false

REQUIREMENTS:
	- Identify count of all battleships
		- Iterate through all rows/columns of matrix
		- Battleship is a sequence of 4 "1" cells surrounded by "0" cells
	- Identify count of all cruisers
		- Iterate through all rows/columns of matrix
		- Cruiser is a sequence of 3 "1" cells surrounded by "0" cells
	- Identify count of all destroyers
		- Iterate through all rows/columns of matrix
		- Destroyer is a sequence of 2 "1" cells surrounded by "0" cells
	- Identify count of all submarines
		- Iterate through all rows/columns of matrix
		- Destroyer is 1 "1" cell surrounded by "0" cells

DATA STRUCTURE:
	Array

- 1 battleship (size of 4 cells), 
- 2 cruisers (size 3), 
- 3 destroyers (size 2)
- 4 submarines (size 1).

ALGORITHM:
	LET SHIPS = ["battleships", "cruisers", "destroyers", "submarines"]
	LET COUNT = {}
	FOR EACH SHIP OF SHIPS
		COUNT[SHIP] = FIND(SHIP, GRID)
	
	RETURN COUNT["battleship"] === 1 AND
				 COUNT["cruiser"] === 2 AND
				 COUNT["destroyer"] === 3 AND
				 COUNT["submarine"] === 4

FIND(ship, grid)
	LET SHIP_SIZES = {
		battleships: 4,
		cruisers: 3,
		destroyers: 2,
		submarines: 1
	}

	LET COUNT = 0

	FOR EACH ROW OF GRID
		ITERATE THROUGH EACH ELEMENT OF ROW
			IF ELEMENT IS "1"
				SLICE ROW FROM CURRENT_INDEX TO THE NEXT SHIP_SIZES[SHIP] ELEMENTS
				IF SLICED ROW IS NOT SAME LENGTH AS SHIP_SIZES[SHIP]
					CONTINUE
				ELSE IF EVERY ELEMENT IN SLICED_ROW IS "1"
					IF ROW_IS_ISOLATED(CURRENT_INDEX, GRID, SHIP_SIZE)
						COUNT++
			ELSE
				CONTINUE TO NEXT ELEMENT
*/
