// LS216 Practice Problems
// Area of Overlapping Rectangles

/*
https://edabit.com/challenge/dejHsfH2qWpgu4CGC

PROBLEM:
Create a function that returns the area of the overlap between two rectangles.

Input: Array, Array
Output: Number

Rules:
	- The function will receive two rectangles, each with the coordinates of two 
		of its opposite angles.
	- Assume the arguments will always be two arrays.
		- Arrays will never be sparse.
		- Assume both arrays will always have two objects as elements.
		- Assume the objects will always have "x" and "y" properties
		- Assume the "x" and "y" property values will always be integers.
	- If there is no overlap, return 0.
	- Non-primitive data types can be mutated, if needed.
	- Assume the first object of array arguments will represent bottom-left corner
		of rectangle.
	- Assume the second object of array arguments will represent top-right corner
		of rectangle.
	- The rectangles could completely overlap each other (entirely)
		- In that case, return the area of rectangles.
	- One rectangle could be smaller and placed inside the other rectangle
		- In that case, return the area of smaller rectangle.

TEST CASES:
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

2, 5
3, 5

5, 7
2, 13

-8, -4
-5, -1

NO OVERLAP:
	RECT1 X1 >= RECT2 X2
	RECT1 X2 <= RECT2 X1

	RECT1 Y1 >= RECT2 Y2
	RECT1 Y2 <= RECT2 Y1

X-OVERLAP
	GET VALUES FROM RECT1 X1 TO X2
	GET VALUES FROM RECT2 X1 TO X2
	RETRIEVE ALL COMMON VALUES BETWEEN TWO SETS
	DETERMINE LENGTH OF SET OF COMMON VALUES

Y-OVERLAP
	SAME PROCESS AS X-OVERLAP BUT WITH Y-COORDINATES

MULTIPLE X-OVERLAP * Y-OVERLAP

DATA STRUCTURE:
	ARRAYS -> FILTER

ALGORITHM:
	IF 
		RECT1 X1 >= RECT2 X2
		RECT1 X2 <= RECT2 X1

		RECT1 Y1 >= RECT2 Y2
		RECT1 Y2 <= RECT2 Y1
	RETURN 0

	ELSE 
		LET X-OVERLAP = X_OVERLAP([NUMS FROM RECT1 X1 TO X2], [NUMS FROM RECT2 X1 TO X2])
		LET Y-OVERLAP = Y_OVERLAP([NUMS FROM RECT1 Y1 TO Y2], [NUMS FROM RECT2 Y1 TO Y2])
		RETURN X-OVERLAP * Y-OVERLAP

X_OVERLAP(NUMS1, NUMS2) 
	FILTER NUMS1 WITH VALUES THAT EXIST IN NUMS2
	RETURN LENGTH OF FILTERED ARR

Y_OVERLAP(NUMS1, NUMS2) 
	FILTER NUMS1 WITH VALUES THAT EXIST IN NUMS2
	RETURN LENGTH OF FILTERED ARR

*/

function overlappingRectangles(rect1, rect2) {
	if (rect1[0]["x"] >= rect2[1]["x"] ||
			rect1[1]["x"] <= rect2[0]["x"] ||
			rect1[0]["y"] >= rect2[1]["y"] ||
			rect1[1]["y"] <= rect2[0]["y"]) return 0;

	let xLength = xOverlap(rect1, rect2);
	let yLength = yOverlap(rect1, rect2);

	return xLength * yLength;
}

function xOverlap(rect1, rect2) {
	let rect1Xs = [];
	let rect2Xs = [];
	for (let i = rect1[0]["x"]; i <= rect1[1]["x"]; i++) rect1Xs.push(i);
	for (let i = rect2[0]["x"]; i <= rect2[1]["x"]; i++) rect2Xs.push(i);

	return rect1Xs.filter(value => rect2Xs.includes(value)).length - 1;
}

function yOverlap(rect1, rect2) {
	let rect1Ys = [];
	let rect2Ys = [];
	for (let i = rect1[0]["y"]; i <= rect1[1]["y"]; i++) rect1Ys.push(i);
	for (let i = rect2[0]["y"]; i <= rect2[1]["y"]; i++) rect2Ys.push(i);

	return rect1Ys.filter(value => rect2Ys.includes(value)).length - 1;
}

p = console.log;

p(overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
))

p(overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
))

p(overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
))