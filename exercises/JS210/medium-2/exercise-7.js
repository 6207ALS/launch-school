// JS210 Exercises | Medium 2
// Exercise 6 - Bubble Sort

/*
PROBLEM:
Write a function that takes an array as an argument and sorts that array using 
the bubble sort algorithm.

Input: Array
Output: Array

Rules:
	- Bubble Sort:
		- Makes multiple passes (iterations) through an array
		- On each pass, the two values of each pair of consecutive elements are 
			compared. If the first value is greater than the second, the two elements 
			are swapped. 
		- This process is repeated until a complete pass is made without performing 
			any swaps — at which point the array is completely sorted.
		- The sorting should be done "in-place" — that is, the function should 
			mutate the array.
		- Assume that the array contains at least two elements.
		- Every value in element should be compared with [>, =, <, >=, <=] operators
		- Assume all elements of an array will be the same data type.

TEST CASES:
const array1 = [5, 3];
[3, 5]
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

REQUIREMENTS:
	Keep making passes of array argument until previous pass made 0 swaps
		Keep tally of number of swaps made in pass
		Iterate through the elements of array
			2 consecutive elements [index, index + 1]
		Compare the values of consecutive elements to determine next step
		If first element > second element,
			swap the two elements
		else
			move on to next two elements 

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET NUM_SWAPS; 

	WHILE NUM_SWAPS !== 0
		NUM_SWAPS = 0
		FOR I IN RANGE (0, SECOND TO LAST INDEX)
			LET FIRST_ELEMENT = ARR[I]
			LET SECOND_ELEMENT = ARR[I + 1]

			IF FIRST_ELEMENT > SECOND_ELEMENT
				PERFORM SWAP
				NUM_SWAPS++

	RETURN ARRAY
*/

function bubbleSort(arr) {
	let numSwaps;

	while (numSwaps !== 0) {
		numSwaps = 0;

		for (let i = 0; i <= arr.length - 2; i++) {
			let firstElement = arr[i];
			let secondElement = arr[i + 1];

			if (firstElement > secondElement) {
				let temp = secondElement;
				arr[i + 1] = firstElement;
				arr[i] = temp;
				numSwaps++;
			}
		}
	}

	return numSwaps;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]