// JS210 Exercises | Medium 2
// Exercise 3 - Tri-Angles

/*
PROBLEM:
Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

Input: 3 Numbers
Output: String

Rules:
  - Right: One angle is a right angle (exactly 90 degrees).
	- Acute: All three angles are less than 90 degrees.
	- Obtuse: One angle is greater than 90 degrees.
	- To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
		and every angle must be greater than 0. 
		- If either of these conditions is not satisfied, the triangle is invalid.
	- Assume the arguments will always be 3 numbers.
		- Assume that all angles have integer values
		- Assume that the arguments are in degrees

TEST CASES:
triangle(60, 70, 50);       // "acute"
sum: 180 deg
All angles < 90 deg

triangle(30, 90, 60);       // "right"
sum: 180 deg
1 Angle = 90 deg

triangle(120, 50, 10);      // "obtuse"
sum: 180
1 Angle > 90 deg

triangle(0, 90, 90);        // "invalid"
sum: 180
1 Angle <= 0 deg

triangle(50, 50, 50);       // "invalid"
sum: 150 deg
Sum must be at least 180 deg

REQUIREMENTS:
	- Determine if triangle is a valid triangle
		- If sum of angles is not 180, invalid
		- If any angle is <= 0, invalid

	- Determine if triangle is right
		- 1 angle is 90 deg
	- Determine if triangle is obtuse
		- 1 angle is greater than 90 deg
	- Determine if triangle is acute
		- All 3 Angles are less than 90 degrees

DATA STRUCTURE:
	ARRAY	-> SOME

ALGORITHM:

TRIANGLE(A1, A2, A3)
	IF TRIANGLE IS NOT VALID
		RETURN "invalid"

	IF ONE OF TRIANGLE SIDES === 90
		RETURN "right"
	ELSE IF ONE OF TRIANGLE SIDES > 90
		RETURN "obtuse"
	ELSE
		RETURN "acute"

IS_VALID(A1, A2, A3)
	LET ANGLES = PLACE ANGLES IN ARRAY
	
	IF ANY OF ANGLE IN ANGLES IS <= 0
		RETURN FALSE

	IF SUM OF VALUES IN ANGLES !== 180
		RETURN FALSE

	RETURN TRUE
*/

function triangle(a1, a2, a3) {
	let angles = [a1, a2, a3];

	if (!isValidTriangle(...angles)) return "invalid";

	if (angles.some(angle => angle === 90)) {
		return "right";
	} else if (angles.some(angle => angle > 90)) {
		return "obtuse";
	} else {
		return "acute";
	}
}

function isValidTriangle(a1, a2, a3) {
	let angles = [a1, a2, a3];

	if (angles.some(angle => angle <= 0)) return false;
	if (angles.reduce((acc, angle) => acc + angle, 0) !== 180) return false

	return true;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"


