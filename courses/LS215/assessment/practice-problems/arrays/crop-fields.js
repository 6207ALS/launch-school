// LS216 Practice Problems
// Crop Fields

/*
https://edabit.com/challenge/9KMYT5u9sww3MSzNt

PROBLEM:
Define a function that takes a 2D array (representing a crop field) and return
a Boolean indicating if the crop field if properly hydrated or not.

Input: Array (of subarrays)
Output: Boolean

Rules:
	- You're given a 2D array / matrix of a crop field.
		- Crop field will always be N X M 
			- N > 0 AND M > 0
			- Subarrays will never differ in length
		- Each crop needs to be hydrated.
			- A "c" represents a crop in the crop field
		- Each water source hydrates the 8 tiles around it.
			- A "w" represents a water source in the crop field.
			- A crop can be hydrated from multiple water sources.
	- "w" on its own should return true,
	- "c" on its own should return false.
	- Some arguments may not have a water source at all, some may not have
		crops at all.
		- "w" on its own should return true, and "c" on its own should return false.
			- Multiple "w"s or multiple "c"s apply this rule as well.

	- Assume argument will always be a single array of subarrays.
		- Assume subarrays will only contains Strings of "w"s and "c"s.
		- None of the arrays will be sparse.
	- Non-primitive data types can be mutated if needed.

TEST CASES:

cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) 
// ➞ true

cropHydrated([
  [ "c", "c", "c" ]
]) 
// ➞ false, There isn"t even a water source.

cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) 
// ➞ false

cropHydrated([
  [ "w", "w", "w" ]
]); 
// ➞ true

cropHydrated([
  ["c"]
]); 
// ➞ false
	
REQUIREMENTS:
	- Iterate through each element of matrix
		- If element is "w", continue to next element
		- If element is "c", check its surrounding elements for a "w"
			- If "w" is found, continue to next element
			- If none of the surrounding elements are "w", return false
	- Keep track of left, top, right, bottom boundaries of matrix
		- boundaries determine which surrounding elements you can check for a given
			element
	
DATA STRUCTURE:
	- Array

ALGORITHM:
	FOR EACH SUBARRAY OF ARRAY ARGUMENT
		FOR EACH ELEMENT OF SUBARRAY
			IF ELEMENT === "w"
				CONTINUE TO NEXT ELEMENT
			ELSE
				LET SURROUNDING_VALUES = [];

				PUSH ELEMENT AT TOP_LEFT INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT TOP INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT TOP_RIGHT INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT RIGHT INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT BOTTOM_RIGHT INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT BOTTOM INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT BOTTOM_LEFT INDEX TO SURROUNDING_VALUES
				PUSH ELEMENT AT LEFT INDEX TO SURROUNDING_VALUES

				IF ANY OF THE VALUES IN SURROUNDING VALUES IS "w"
					CONTINUE TO NEXT ELEMENT OF SUBARRAY
				ELSE
					RETURN FALSE

	RETURN TRUE
*/

function cropHydrated(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === "w") {
				continue;
			} else {
				let surroundingElements = [];

				surroundingElements.push((matrix[i - 1] || [])[j - 1])
				surroundingElements.push((matrix[i - 1] || [])[j])
				surroundingElements.push((matrix[i - 1] || [])[j + 1])
				surroundingElements.push((matrix[i] || [])[j + 1])
				surroundingElements.push((matrix[i + 1] || [])[j + 1])
				surroundingElements.push((matrix[i + 1] || [])[j])
				surroundingElements.push((matrix[i + 1] || [])[j - 1])
				surroundingElements.push((matrix[i] || [])[j - 1])

				if (surroundingElements.includes("w")) {
					continue;
				} else {
					return false;
				}
			}
		}
	}

	return true;
}

p = console.log;

p(cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) )
// ➞ true

p(cropHydrated([
  [ "c", "c", "c" ]
]) )
// ➞ false, There isn"t even a water source.

p(cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) )
// ➞ false

p(cropHydrated([
  [ "w", "w", "w" ]
])); 
// ➞ true

p(cropHydrated([
  ["c"]
])); 
// ➞ false