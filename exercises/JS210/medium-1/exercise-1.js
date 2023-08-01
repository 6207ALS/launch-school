// JS210 Exercises | Medium 1
// Exercise 1 - Rotation Part 1

/*
PROBLEM:
Write a function that rotates an array by moving the first element to the end of 
the array. 

Input: Array
Output: Array

Rules:
	- Do not modify the original array.
	- If the input is not an array, return undefined.
	- If the input is an empty array, return an empty array.
	- Review the test cases below, then implement the solution accordingly.

TEST CASES:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
arr[0] + arr.slice(1);

rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
arr[0] + arr.slice(1);

rotateArray(['a']);                    // ["a"]
arr[0] + arr.slice(1);

rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
arr[0] + arr.slice(1);

rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
arr[0] + arr.slice(1);

rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

REQUIREMENTS
	- Make sure argument is an array
		- return undefined if not
	- Ensure array argument is not modified
		- Copy the array
	- Concatenate (array sliced from indexes 1 - end of array) TO
		(first element of array)

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	IF ARGUMENT IS NOT ARRAY
		RETURN UNDEFINED
	
	LET RESULT = ARRAY COPY

	RETURN (RESULT SLICED FROM INDEX 1 TO END) + (RESULT SLICED FROM INDEX 0, 1 ELEMENT)
*/

function rotateArray(arr) {
	if (!Array.isArray(arr)) return undefined;
	let result = arr.slice();
	return result.slice(1).concat(result.slice(0, 1));
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
