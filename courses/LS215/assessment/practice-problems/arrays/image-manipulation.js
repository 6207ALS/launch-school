// LS216 Practice Problems
// Image Manipulation: Invert (Part 1)

/*
https://edabit.com/challenge/6YfWWLSQyPJwz2Srg

PROBLEM:
Define a function that takes a 3D array representation of an image and returns 
the inverse of that.

Input: Array
Output: Array

RULES:
	- Assume the argument will always be a single array.
		- Assume the array will only contain subarrays as elements.
			- The length of every subarray will be the same.
			- Assume the subarrays will only contain subarrays as elements.
				- The length of every subarray will be the same
				- The innermost subarrays will always contain 3 integers (representing RGB).
				- Valid RGB values are [0, 255]
				- Any value outside of that range should be corrected to the closest valid
					RGB value.

	- Array argument should NOT be mutated.
	- INVERSION: Subtracting a RGB value from 255. The result is the inverted value.
		- Every value in an RGB Code (#, #, #) should be inverted

invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
])
[
	[
		[255, 255, 255]
		[255, 255, 255]
	],
	[
		[255, 255, 255]
		[255, 255, 255]
	]
]

//[
//  [[0, 0, 0], [0, 0, 0]],
//  [[0, 0, 0], [0, 0, 0]]
//]

invert([
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
])

// [
// 	 [[255,255,255], [255,255,255]],
// 	 [[255,255,255], [255,255,255]]
// ]
	
invert([
	[[0,0,255], [0,0,0], [0,0,157], [100,229,4]],
	[[100,0,3], [1,100,0], [0,10,0], [0,168,0]],
	[[16,30,0], [0,125,0], [15,0,9], [0,139,0]],
	[[200,2,0], [0,125,0], [0,0,9], [0,200,0]]
])

// [
// 	[[255,255,0], [255,255,255], [255,255,98], [155,26,251]],
// 	[[155,255,252], [254,155,255], [255,245,255], [255,87,255]],
// 	[[239,225,255], [255,130,255], [240,255,246], [255,116,255]],
// 	[[55,253,255], [255,130,255], [255,255,246], [255,55,255]]
// ]


REQUIREMENTS:
	- iterate through every subarray of arr argument
		- iterate through every subarray of subarr
			- map subarray with "inverted" values
				- if value is less than 0, reassign it to 0
				- if value is greater than 255, reassign it to 255
				- then, value should be replaced with (255 - value)

	- return inverted image

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET INVERTED_IMAGE = [];

	FOR EACH ROW OF ARRAY ARGUMENT
		LET NEW_ROW = [];
		FOR EACH PIXEL OF ROW
			LET NEW_PIXEL = MAP PIXEL(VALUE)
				IF VALUE < 0
					VALUE = 0
				IF VALUE > 255
					VALUE = 255

				RETURN 255 - VALUE;
			PUSH NEW_PIXEL TO NEW_ROW
		PUSH NEW_ROW TO INVERTED_IMAGE

	RETURN INVERTED_IMAGE
*/

function invert(image) {
	let invertedImage = [];
	for (let row of image) {
		let newRow = [];
		for (let pixel of row) {
			let newPixel = pixel.map(value => {
				if (value < 0) value = 0;
				if (value > 255) value = 255;
				return 255 - value;
			});
			newRow.push(newPixel);
		}
		invertedImage.push(newRow);
	}
	return invertedImage;
}

p = console.log;

p(invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]))

//[
//  [[0, 0, 0], [0, 0, 0]],
//  [[0, 0, 0], [0, 0, 0]]
//]

p(invert([
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]))

// [
// 	 [[255,255,255], [255,255,255]],
// 	 [[255,255,255], [255,255,255]]
// ]
	
p(invert([
	[[0,0,255], [0,0,0], [0,0,157], [100,229,4]],
	[[100,0,3], [1,100,0], [0,10,0], [0,168,0]],
	[[16,30,0], [0,125,0], [15,0,9], [0,139,0]],
	[[200,2,0], [0,125,0], [0,0,9], [0,200,0]]
]))

// [
// 	[[255,255,0], [255,255,255], [255,255,98], [155,26,251]],
// 	[[155,255,252], [254,155,255], [255,245,255], [255,87,255]],
// 	[[239,225,255], [255,130,255], [240,255,246], [255,116,255]],
// 	[[55,253,255], [255,130,255], [255,255,246], [255,55,255]]
// ]