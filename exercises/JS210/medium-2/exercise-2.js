// JS210 Exercises | Medium 2
// Exercise 2 - Triangle Sides

/*
PROBLEM:
Write a function that takes the lengths of the three sides of a triangle as 
arguments and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Input: 3 Numbers
Output: String

Rules:
	- Equilateral: All three sides are of equal length.
  - Isosceles: Two sides are of equal length, while the third is different.
	- Scalene: All three sides are of different lengths.
	- To be a valid triangle, the sum of the lengths of the two shortest sides
		must be greater than the length of the longest side, and every side must 
		have a length greater than 0.
		- If either of these conditions is not satisfied, the triangle is invalid.
	- Assume arguments will always be 3 numbers
		- Numbers will either be an integer or decimal

TEST CASES:
triangle(3, 3, 3);        // "equilateral"
every side > 0, sum of s1 and s2 > s3 -> valid triangle
3 = 3 = 3 -> equilateral

triangle(3, 3, 1.5);      // "isosceles"
every side > 0, sum of s1 and s2 > s3 -> valid triangle
s1 = s2 && (s3 != s1 && s3 != s2) -> isosceles

triangle(3, 4, 5);        // "scalene"
every side > 0, sum of s1 and s2 > s3 -> valid triangle
s1 != s2, s2 != s3, s1 != s3

triangle(0, 3, 3);        // "invalid"
s1 side <= 0, invalid

triangle(3, 1, 1);        // "invalid"
sum of shortest two sides < s3, invalid

REQUIREMENTS:
	- first determine if triangle is valid or not
		- check if any side is <= 0
			- return invalid if true
		- check if sum of shortest two sides is <= than third side
			- return invalid if true 
	- determine if triangle is equilateral
		- check if all three sides are the same value
		- return 'equilateral' if true
	- determine if triangle is scalene
		- check if all three sides are different
		- return 'scalene' if true
	- ELSE return "isosceles"

DATA STRUCTURE:
	- ARRAY -> SORT SIDES

ALGORITHM:

MAIN(s1, s2, s3)
	IF TRIANGLE IS_INVALID
		RETURN 'INVALID'
	
	IF S1 === S2 AND S2 === S3
		RETURN 'equilateral'
	ELSE IF S1 !== S2 && S2 !== S3 && S1 !== S3
		RETURN 'scalene'
	ELSE
		RETURN 'isosceles'


IS_VALID(s1, s2, s3)
	LET SIDES = PLACE ARGUMENTS INTO ARRAY

	IF ANY VALUE IN ARRAY IS <= 0
		RETURN FALSE

	SORT ARRAY TO INCREASING ORDER 

	FIRST AND SECOND ELEMENTS ARE TWO SHORTEST SIDES
	IF SUM OF FIRST AND SECOND ELEMENTS IS <= THIRD ELEMENT
		RETURN FALSE

	RETURN TRUE
*/

function triangle(s1, s2, s3) {
	if (!isValidTriangle(s1, s2, s3)) return "invalid";

	if (s1 === s2 && s2 === s3) {
		return "equilateral";
	} else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
		return "scalene";
	} else {
		return "isosceles";
	}
}

function isValidTriangle(s1, s2, s3) {
	let sides = [s1, s2, s3];

	if (sides.some(side => side <= 0)) return false;

	sides.sort((a, b) => a - b);
	if (sides[0] + sides[1] <= sides[2]) return false

	return true;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"