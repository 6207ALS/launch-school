// LS216 Practice Problems
// Puzzle Pieces

/*
https://edabit.com/challenge/Zu4LyLXhd9e49krFP
*/

function puzzlePieces(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	
	let result = arr1.map((element, index) => {
		return element + arr2[index];
	});

	return result.every(val => val === result[0])
}

p = console.log;

p(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])) // ➞ true
p(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])) // ➞ true
p(puzzlePieces([1], [1])) // true
p(puzzlePieces([1, 2], [-1, -1])) // ➞ false
p(puzzlePieces([9, 8, 7], [7, 8, 9, 10])) // ➞ false