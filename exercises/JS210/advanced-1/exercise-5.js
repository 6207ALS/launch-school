// JS210 Exercises | Advanced 1
// Exercise 5 - Merge Sorted Lists

/*
PROBLEM:
Write a function that takes two sorted arrays as arguments and returns a new 
array that contains all the elements from both input arrays in sorted order.

Input: 2 Arrays
Output: 1 Array

Rules:
	- Assume the function always takes two sorted arrays as arguments
	- You may not provide any solution that requires you to sort the result array.
	- You must build the result array one element at a time in the proper order.
	- Your solution should not mutate the input arrays.
	- The elements of the two arrays will always be Numbers.
	- Assume the arrays will never be sparse.
	- The arrays may share the same values.
	- Some array arguments may be empty.

TEST CASES:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
[1,5,9] [2,6,8]
[1, 2, 5, 6, 8, 9]


merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
[1,1,3] [2,2]
[1,1,2,2,3]

merge([], [1, 4, 5]);             // [1, 4, 5]
[] [1,4,5] 
[1,4,5]

merge([1, 4, 5], []);             // [1, 4, 5]
[1,4,5] []
[1,4,5]

REQUIREMENTS:
	- initialize result array
	- make clones of both arrays
	1. make comparisons between first element of both arrays
	2. element with lesser value is removed from its array and pushed to result
		array
	3. repeat steps 1 and 2 until either array is empty
	4. add remaining elements of non-empty array to result array

DATA STRUCTURE:
	ARRAYS

ALGORITHM:
	LET RESULT = [];

	MAKE COPIES OF ARR1 and ARR2

	WHILE ARR1 IS NOT EMPTY && ARR2 IS NOT EMPTY
		COMPARE FIRST ELEMENT OF BOTH ARRAYS
		IF ELEMENT1 (ARR1) < ELEMENT2(ARR2)
			REMOVE FIRST ELEMENT OF ARR1
			PUSH ELEMENT TO RESULT
		ELSE
			REMOVE FIRST ELEMENT OF ARR2
			PUSH ELEMENT TO RESULT
	
	PUSH ELEMENTS OF NON-EMPTY ARRAY TO RESULT
	
	RETURN RESULT
*/

function merge(arr1, arr2) {
	arr1 = arr1.slice();
	arr2 = arr2.slice();
	let result = [];

	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[0] < arr2[0]) {
			result.push(arr1.shift());
		} else {
			result.push(arr2.shift());
		}
	}

	result = result.concat(arr1.length === 0 ? arr2 : arr1);

	return result;
}

let testArr1 = [1, 5, 9];
let testArr2 = [2, 6, 8];

console.log("testArr1 Before: ", testArr1);
console.log("testArr2 Before: ", testArr2);

console.log(merge(testArr1, testArr2));        // [1, 2, 5, 6, 8, 9]

console.log("testArr1 After: ", testArr1);
console.log("testArr2 After: ", testArr2);

console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));             			 // []