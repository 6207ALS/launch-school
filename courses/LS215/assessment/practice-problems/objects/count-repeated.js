// LS216 Practice Problems
// Count How Many Times an Element is Repeated

/*
https://edabit.com/challenge/XWXprtaTWYCWBGAax

PROBLEM:
Given an array, create a function that returns an object detailing how many 
times each element was repeated.

Input: Array
Output: Object

Rules:
	- Sort the object by value in descending order.
	- The array elements can be anything.

	- Assume the argument will always be a single array.
		- If the array is empty, return an empty object.
		- The array will never be sparse.
		- The array can be mutated, if needed.
		- The array will contain only primitive data types as elements.
	- All data types should be considered Strings.
		- A repeated element is case sensitive for Strings.
			- "cow" !== "Cow"
	
TEST CASES:
countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) 
// ➞ { cow: 3, cat: 2, dog: 1 }

countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) 
// ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) 
// ➞ { null: 3, Infinity: 2}

countRepetitions([Infinity, null, Infinity, null, null]) ➞ 
// { null: 3, Infinity: 2}

countRepetitions([]) 
// ➞ {}

REQUIREMENTS:
	- Initialize empty object to keep record of unique values and their # of
		occurrences.
	- Iterate through each element of array argument.
		- If current element doesn't exist as key in object, create one with a value
			of 0
		- Increment current element in object by 1

DATA STRUCTURE:
	- Objects
	- Array -> Abstraction Methods (forEach, filter)

ALGORITHM:
	LET COUNT = {}

	FOR EACH ELEMENT OF ARRAY
		IF ELEMENT DOESNT EXIST AS KEY IN COUNT
			COUNT[ELEMENT] = 0

		COUNT[ELEMENT]++

	RETURN COUNT
*/

function countRepetitions(arr) {
	let count = {};

	for (let element of arr) {
		if (!(count.hasOwnProperty(String(element)))) {
			count[String(element)] = 0;
		}

		count[String(element)]++;
	}

	count.sort((a, b) => b - a);
	return count;
}

p = console.log;

p(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]));
// ➞ { cow: 3, cat: 2, dog: 1 }

p(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]));
// ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

p(countRepetitions(["Infinity", "null", "Infinity", "null", "null"]));
// ➞ { null: 3, Infinity: 2}

p(countRepetitions([Infinity, null, Infinity, null, null]));
// ➞ { null: 3, Infinity: 2}

p(countRepetitions([]));
// ➞ {}


