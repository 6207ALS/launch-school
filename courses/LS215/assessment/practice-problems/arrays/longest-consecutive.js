// LS216 Practice Problems
// Longest Consecutive Run

/*
A consecutive-run is a list of adjacent, consecutive integers. This list can be
either increasing or decreasing. Create a function that takes an array of 
numbers and returns the length of the longest consecutive-run.

longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
*/

/*
PROBLEM:
Create a function that takes an array of numbers and returns the length of the 
longest consecutive-run.

Input: array
Output: numbers

Rules:
  - A consecutive-run is a list of adjacent, consecutive integers.
    - This list can be either increasing or decreasing.
  - Consecutive-run -> subarray of array argument
		- two consecutive runs will never share the same element
  - Assume argument will always be a single array.
    - Array will contain only integers as elements.
      - integers can be 0, negative, positive
    - If array is empty, return [].
    - Array argument can not be mutated
    - Array argument can be sparse.
      - Empty values should be ignored when determining consecutive-runs
    - Duplicate values can exist.
      - Consecutive duplicate values break the run


TEST CASES:
longestRun([1, 2, 3, 5, 6, 7, 8, 9]) 
// ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).

longestRun([3, 2, 4, 5, 6, 7, 8, 9]) 

longestRun([1, 2, 2, 5, 6, 7, 8]) 
// ➞ 4
// [1, 2] [2] [5, 6, 7, 8]

longestRun([-1, -2, -3, 4, 5, 6, 7, 8]) 
// ➞ 5
// [-1, -2, -3] [4, 5, 6, 7, 8]

longestRun([])
// ➞ []

longestRun([1, , 2, 5, 6, 7, 8, 9])
// -> 5
// [1, 2], [5, 6, 7, 8, 9]

let arr1 = [1, 2, 3, 4]
longestRun(arr1)
console.log(arr1);

REQUIREMENTS:
  - initialize empty array to contain all subarrays of consecutive runs
	-	iterate through elements of arr
		- splice array at indexes where consecutive elements DON'T have a difference
			of 1
			- push spliced array to empty array
		- filter out arrays whose elements aren't all increasing or all decreasing
		- return length of longest array

DATA STRUCTURE:
  Array

[1, 2, 3, 5, 6, 7, 8, 9]

ALGORITHM:
  LET POTENTIAL_RUNS = []
	LET START_ELEMENT = 0
	LET CURRENT_ELEMENT = 0

	WHILE END_INDEX <= LAST INDEX OF ARR_ARG
		IF NEXT_ELEMENT - CURRENT_ELEMENT > 1
			SLICE ARR_ARG FROM START_ELEMENT TO CURRENT_ELEMENT (INCLUSIVE)
			PUSH SLICED ARR TO POTENTIAL RUNS
			START_ELEMENT = NEXT_ELEMENT INDEX
			CURRENT_ELEMENT = NEXT_ELEMENT INDEX
		ELSE
			CURRENT_ELEMENT++


	POTENTIAL_RUNS = FILTER POTENTIAL_RUNS WITH ARRAYS THAT ONLY CONSTANTLY INCREASE
									 OR DECREASE

	MAP POTENTIAL_RUNS WITH LENGTH OF EACH ARRAY

	RETURN HIGHEST LENGTH IN MAPPED ARR

			
CONSTANTLY_INCREASING(ARR)
	FROM 1ST ELEMENT TO SECOND-TO-LAST
		IF NEXT ELEMENT ISNT (CURRENT_ELEMENT + 1)
			RETURN FALSE
	
	RETURN TRUE

CONSTANTLY_INCREASING(ARR)
	FROM 1ST ELEMENT TO SECOND-TO-LAST
		IF NEXT ELEMENT ISNT (CURRENT_ELEMENT - 1)
			RETURN FALSE

	RETURN TRUE
*/

function longestRun(arr) {
	let possibleRuns = potentialRuns(arr);
	let runs = possibleRuns.filter(run => (isIncreasing(run) || isDecreasing(run)));
	let runLengths = runs.map(run => run.length);

	return Math.max(...runLengths) || [];
}

function isIncreasing(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] !== arr[i] + 1) return false;
	}
	return true;
}

function isDecreasing(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] !== arr[i] - 1) return false;
	}
	return true;
}

function potentialRuns(arr) {
	let runs = [];
	let startIndex = 0;
	let endIndex = 0;

	while (endIndex < arr.length - 1) {
		if (Math.abs(arr[endIndex + 1] - arr[endIndex]) !== 1) {
			runs.push(arr.slice(startIndex, endIndex + 1));
			startIndex = endIndex + 1;
		}
		endIndex++
	}

	runs.push(arr.slice(startIndex, endIndex + 1));
	return runs;
}

p = console.log;


p(longestRun([1, 2, 3, 5, 6, 7, 8, 9]) )
// ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).

p(longestRun([3, 2, 4, 5, 6, 7, 8, 9])) 

p(longestRun([1, 2, 2, 5, 6, 7, 8])) 
// ➞ 4
// [1, 2] [2] [5, 6, 7, 8]

p(longestRun([-1, -2, -3, 4, 5, 6, 7, 8])) 
// ➞ 5
// [-1, -2, -3] [4, 5, 6, 7, 8]

p(longestRun([]))
// ➞ []

let arr1 = [1, 2, 3, 4]
longestRun(arr1)
console.log(arr1);