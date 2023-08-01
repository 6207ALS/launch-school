// LS216 Practice Problems
// Hall monitor 2

/*
https://edabit.com/challenge/yPa5YwAoqfdJuWK4C

PROBLEM:
Create a function that validates whether the route taken between rooms is 
possible.

Input: Array
Output: Boolean

Rules:
	- A floor plan is arranged as follows:
		- You may freely move between rooms 1 and 2.
		- You may freely move between rooms 3 and 4.
		- However, you can enter the hallway to move between rooms 2 and 4.

	- The hallway will be given as the letter "H".
	- A route may begin or end in any room (including the hallway).
	- All element of the array are either integers 1-4 or the letter "H".
	- No rooms will repeat.

	- Assume the argument will always be a single array.
	- An empty (or single element) array should return true
	- The array will never be sparse.
	- The array can be mutated if needed.

TEST CASES:
possiblePath([1, 2, "H", 4, 3]) ➞ true

 1  : 2
 2  : 1, "H"
"H" : 2, 4
 4  : 3, "H"
 3  : 4



possiblePath(["H", 1, 2]) ➞ false

"H": 1

possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
4: 3
3: 4, 4
4: 3, "H"
"H": 4, 4
4: "H", "H"
"H": 4

possiblePath([]) ➞ true

possiblePath([1]) ➞ true

possiblePath(["H"]) ➞ true

REQUIREMENTS:
	Values and their valid neighbors:
		1: 2
		2: 1, "H"
		"H": 2, 4
		4: "H", 3
		3: 4

	- Iterate through elements of array argument.
	- For each element, determine its neighboring elements.
		- Determine if neighbors are valid neighbors (look at chart above)
		- If either of neighbours are invalid, return false
	- **Determining neighbors are different for first and last indexes**

DATA STRUCTURE:
	Array
	Object

ALGORITHM:
	IF ARRAY ARG LENGTH IS < 2
		RETURN TRUE

	LET VALID_NEIGHBORS = {
		1: [2]
		2: [1, "H"]
		H: [2, 4]
		4: ["H", 3]
		3: [4]
	}

	FOR EACH PATH OF ARRAY ARG
		LET NEIGHBORS = []

		IF INDEX IS 0
			PUSH ELEMENT AT INDEX + 1 TO NEIGHBORS
		IF INDEX IS LAST INDEX
			PUSH ELEMENT AT INDEX - 1 TO NEIGHBORS
		ELSE
			PUSH ELEMENT AT (INDEX + 1) TO NEIGHBORS
			PUSH ELEMENT AT (INDEX - 1) TO NEIGHBORS

		FOR EACH ELEMENT OF NEIGHBORS
			IF ELEMENT IS NOT IN VALID_NEIGHBORS[PATH]
				RETURN FALSE

	RETURN TRUE
*/

const VALID_PATHS = {
	"1": [2],
	"2": [1, "H"],
	"H": [2, 4],
	"4": ["H", 3],
	"3": [4],
}


function possiblePath(paths) {
	if (paths.length <= 1) return true;

	for (let i = 0; i < paths.length; i++) {
		let neighbors = [];

		if (i === 0) {
			neighbors.push(paths[i + 1]);
		} else if (i === paths.length - 1) {
			neighbors.push(paths[i - 1]);
		} else {
			neighbors.push(paths[i + 1]);
			neighbors.push(paths[i - 1]);
		}

		for (let neighbor of neighbors) {
			if (!(VALID_PATHS[paths[i]].includes(neighbor))) return false;
		}
	}

	return true;
}

p = console.log;

p(possiblePath([1, 2, "H", 4, 3])) 
// ➞ true

p(possiblePath(["H", 1, 2])) 
// ➞ false

p(possiblePath([4, 3, 4, "H", 4, "H"])) 
// ➞ true

p(possiblePath([])) 
// ➞ true

p(possiblePath([1])) 
// ➞ true

p(possiblePath(["H"])) 
// ➞ true