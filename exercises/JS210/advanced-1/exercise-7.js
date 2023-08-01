/*
[1, 5, 7, 11, (23), 45, 65, 89, 102], 89
[1, 5, 7, 11, (23), 45, 65, 89, 102]
[1, 5, (7) 11, (23), 45, 65, 89, 102]


REQUIREMENTS:
- calculate the middle index of array
- check if value at middle index is argument value
- if it is, return current middle index
- if not, split the array in half based on if value is higher or lower than argument
- repeat all steps until array is empty

*/

function binarySearch(arr, value) {
	let upperBound = arr.length;
	let lowerBound = -1;

	while (lowerBound <= upperBound) {
		let middleIndex = Math.floor((upperBound + lowerBound) / 2);
		if (arr[middleIndex] === value) {
			return middleIndex;
		} else if (arr[middleIndex] > value) {
			upperBound = middleIndex - 1;
		} else {
			lowerBound = middleIndex + 1;
		}
	}

	return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
