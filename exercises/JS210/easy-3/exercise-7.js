// JS210 Exercises | Easy 3
// Exercise 7 - Running Totals

/*
PROBLEM:
Write a function that takes an array of numbers and returns an array with the 
same number of elements, but with each element's value being the running total 
from the original array.

Input: Array
Output: Array

Rules:
	- Returned array should have the same number of elements as argument array
	- Each element's value in returned array should be the running total from
		the original array.
			- Running total: the sum of values from the first element all the way to
				the current element.
	- Assume argument will always be an array.
	- Assume any element in array will always be integer
	- Empty array argument should return empty array as well


TEST CASES:
runningTotal([2, 5, 13]);             // [2, 7, 20]
(0 + 2), (0 + 2 + 5), (0 + 2 + 5 + 13)
2, 7, 20

runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
(0 + 14), (0 + 14 + 11), (0 + 14 + 11 + 7), (0 + 14 + 11 + 7 + 15) + (0 + 14 + 11 + 7 + 15 + 20)
14, 25, 32, 47, 67

runningTotal([3]);                    // [3]
0 + 3
3

runningTotal([]);                     // []

REQUIREMENTS:
	- iterate through each element of the array argument
	- calculate the sum of element values from first element to current element
		- slice array from first element to current element
		- calculate sum of values for sliced array
		- place sum in new array (in the same index) 

DATA STRUCTURE:
	ARRAY -> Abstraction methods (map, reduce, ...)

ALGORITHM:
	MAP THE ARRAY ARGUMENT
		FOR EACH ELEMENT OF ARRAY, REPLACE IT WITH...
			SLICE THE ARRAY FROM FIRST ELEMENT TO CURRENT ELEMENT
			CALCULATE THE SUM OF ELEMENT VALUES IN SLICED ARRAY (REDUCE)
			RETURN CALCULATED SUM
	
	RETURN MAPPED ARRAY
*/

function runningTotal(arr) {
	return arr.map((_, index) => {
		let subArr = arr.slice(0, index + 1);
		return subArr.reduce((acc, val) => acc + val, 0);
	});
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []