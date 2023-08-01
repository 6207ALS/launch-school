// LS216 Practice Problems
// Car Park Exit

/*
https://edabit.com/challenge/sGneEQ9ZvGtBuNyrr

PROBLEM:
You are stuck in a multi-floor car parking lot. Your task is to exit the 
carpark using only the staircases. Exit is always at the bottom right of the 
ground floor.

Input: Array
Output: Array

Rules:
	- Argument will always be a single Array
		- Array argument will only contain arrays as elements
		- Subarrays will only contain the Integers 0, 1, or 2 as elements
		- Array argument/subarrays will never be sparse
		- Array argument/subarrays will never be empty.
			- Minimum length of array argument will be 1 subarray
			- Minimum length of subarrays are 2 elements.
		- Arrays can be mutated if needed
		- Array argument will always be M X N 
			- (M can be equal to N)
			- All subarrays will have the same length.
	
	- Free carparking spaces are represented by a 0 in the subarrays
	- Staircases are represented by a 1 in the subarrays
	- Your starting position is represented by a 2 and can be at any level of the 
		car park at any index.
		- Assume grid will always contain a single 2.
	- Exit is always at the bottom right of the ground 
		floor.
		- Ground floor will always be last floor of grid.
		- Grid will never have floors beneath ground floor.
	- You must use the staircases (1) to go down a level.
	- Each floor will have only one staircase apart from the ground floor 
		which will not have any staircases.
		- In other words, every floor (besides ground) will always have a staircase.
		- *** The staircases of every floor are located at the same index of the 
			subarrays. ****
		- Staircases can exist at any column of grid.

		- Steps for shortest route should be ordered left to right (output array)
		- Each step is formatted "[DIRECTION][NUMBER_OF_STEPS]"
			- Possible directions: L, R, D
			- Number of steps: how many elements/indexes moved on the row/column.

TEST CASES:

parkingExit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) 
// ➞ ["L4", "D1", "R4"]

parkingExit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) 
// ➞ ["R3", "D2", "R1"]

parkingExit([
  [0, 0, 0, 1, 0],
  [2, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) 
// ➞ ["R3", "D1", "R1"]

parkingExit([[2, 0, 0, 0, 0]]) 
// ➞ ["R4"]

parkingExit([[0, 0, 0, 0, 2]]) 
// ➞ []

REQUIREMENTS:
	- Locate the floor 2 is on the map
	- Locate the column 1 is at on the floor 2 is on.
	- Determine the distance between 2 and 1.
		- This is your first step in output. (how many steps taken on current floor)
	- Determine the distance between the 1 and the ground floor (column)
		- This is your second step (how many steps taken "down" the staircase)
	- Determine the distance between 1 and the end of a subarray
		- This is your third step (how many steps taken from ground floor to exit)

DATA STRUCTURE
	Array

ALGORITHM:
	LET CURRENT_FLOOR = SUBARR OF ARRAY ARGUMENT THAT CONTAINS A NUMBER 2 
	LET PERSON_LOC = INDEX OF 2 IN THE SUBARR THAT CONTAINS THE NUMBER 2
	LET STAIR_CASE_LOC = INDEX OF ANY SUBARR WHERE ELEMENT IS THE NUMBER 1

	LET FIRST_STEP = (PERSON_LOC - STAIR_CASE_LOC)

	IF FIRST_STEP IS A POSITIVE VALUE
		FIRST_STEP = "L" + FIRST_STEP
	ELSE
		FIRST_STEP = "R" + ABSOLUTE_VALUE(FIRST_STEP)

	LET SECOND_STEP = "D" + (LENGTH OF ARR ARG - (CURRENT_FLOOR + 1))

	LET THIRD_STEP = "R" + ABSOLUTE_VAL(STAIR_CASE_LOC - (LENGTH OF ANY SUBARR - 1))


	RETURN [FIRST_STEP, SECOND_STEP, THIRD_STEP]
*/

function parkingExit(map) {
	let currentFloor = findCurrentFloor(map);
	let personLocation = map[currentFloor].indexOf(2);
	let stairLocation = map[0].indexOf(1);

	let firstStep = (personLocation - stairLocation);
	firstStep = firstStep > 0 ? `L${firstStep}` : `R${Math.abs(firstStep)}`;

	let secondStep = `D${map.length - (currentFloor + 1)}`;
	if (stairLocation === -1) stairLocation += 1;
	let thirdStep = `R${Math.abs(stairLocation - (map[0].length - 1))}`;
	
	
	if (map.length === 1 && personLocation === (map[0].length - 1)) {
		return [];
	} else if (map.length === 1) {
		return [thirdStep];	
	} else {
		return [firstStep, secondStep, thirdStep];
	}
}

function findCurrentFloor(map) {
	let currentFloor;

	map.forEach((subArr, index) => {
		if (subArr.includes(2)) currentFloor = index;
	});

	return currentFloor;
}

p = console.log;

p(parkingExit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
])) 
// ➞ ["L4", "D1", "R4"]

p(parkingExit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
])) 
// ➞ ["R3", "D2", "R1"]

p(parkingExit([
  [0, 0, 0, 1, 0],
  [2, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
])) 
// ➞ ["R3", "D1", "R1"]

p(parkingExit([[2, 0, 0, 0, 0]])) 
// ➞ ["R4"]

p(parkingExit([[0, 0, 0, 0, 2]])) 
// ➞ []