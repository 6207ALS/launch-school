// LS216 Practice Problems
// Check if the brick fits through the hole

/*
https://edabit.com/challenge/ixdXLyopP7c4aPXqx

PROBLEM:
Write the function that takes three dimensions of a brick: 
height(a), width(b) and depth(c) and returns true if this brick can fit into a 
hole with the width(w) and height(h).

Input: Number, Number, Number, Number, Number
Output: Boolean

Rules:
	- You can turn the brick with any side towards the hole.
	- We assume that the brick fits if its sizes equal the ones of the hole 
		(i.e. brick size should be less than or equal to the size of the hole, 
		not strictly less).
	- You can't put a brick in at a non-orthogonal angle.

	- Assume the arguments of the function will always be five Numbers
		- Can either be integers or decimals (fixed 2 decimals).
		- Values will always be greater than 0.

	- Assume the first three number arguments are the height, width, and depth 
		of the brick.
	- Assume the last two number arguments are the width and height.
	- Assume unit of measure is the same for all 5 Number arguments.

TEST CASES:

doesBrickFit(1, 1, 1, 1, 1) 
// ➞ true
(1, 1)

doesBrickFit(1, 2, 1, 1, 1) 
// ➞ true
(1, 2)
(2, 1)
(1, 1)

doesBrickFit(1, 2, 2, 1, 1) 
// ➞ false
(1, 2)
(2, 2)
(1, 2)


doesBrickFit(2.5, 3, 2, 2.5, 2) 
// ➞ true
(2.5, 3)
(3, 2)
(2.5, 2)

REQUIREMENTS:
	- Go through every possible "side dimension" of the rectangle
	- If a "side dimension" matches the dimensions of the hole, brick fits
	- If none of the combinations matches the dimensions of the hole, brick does
		not fit.

ALGORITHM:
	ARRAY -> ABSTRACTION METHODS (every)

ALGORITHM:
	LET A, B, C = ARG1, ARG2, ARG2
	LET X, Y = ARG3, ARG4

	IF (A === X && B === Y || A === Y && B === X) RETURN TRUE
	IF (A === X && C === Y || A === Y && C === X) RETURN TRUE
	IF (B === X && C === Y || B === Y && C === X) RETURN TRUE

	RETURN FALSE
*/

function doesBrickFit(arg1, arg2, arg3, arg4, arg5) {
	let [a, b, c] = [arg1, arg2, arg3];
	let [x, y] = [arg4, arg5];

	if ((a <= x && b <= y) || (a <= y && b <= x)) return true;
	if ((a <= x && c <= y) || (a <= y && c <= x)) return true;
	if ((b <= x && c <= y) || (b <= y && c <= x)) return true;

	return false;
}

p = console.log;

p(doesBrickFit(1, 1, 1, 1, 1)) 
// ➞ true

p(doesBrickFit(1, 2, 1, 1, 1)) 
// ➞ true

p(doesBrickFit(1, 2, 2, 1, 1)) 
// ➞ false

p(doesBrickFit(2.5, 3, 2, 2.5, 2)) 
// ➞ true

p(doesBrickFit(1,1,1, 2,2)) 
// ➞ true

p(doesBrickFit(1,1,1, 1,2)) 
// ➞ true