// JS210 Exercises | Advanced 1
// Exercise 6 - Merge Sort

/*
 [9, 5, 7, 1]
  		 |
[9, 5]	 [7, 1]
	 |			  |
[9] [5]  [7] [1]


	[6, 2, 7, 1, 4]
		  		|
[6, 2, 7]		[1, 4]
	  |					|
[6, 2] [7]	[1] [4]
	|
[6] [2]

REQUIREMENTS:
	- merge the two (sorted) halves of the array 
	- to make sure the two halves are sorted, we'll call mergeSort onto
		halves, which calls mergeSort on those halves (recursive)
	- UNTIL the length of a half is 1 element
		- return the half (array) as is.

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

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	let middleIndex = Math.floor(arr.length / 2);
	let leftHalf = arr.slice(0, middleIndex);
	let rightHalf = arr.slice(middleIndex);

	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]