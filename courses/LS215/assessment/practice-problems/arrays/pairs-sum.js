// LS216 Practice Problems
// All Pairs that Sum to target

/*
https://edabit.com/challenge/MXbibjS95Y8X4wDZx

PROBLEM:
Create a function that returns all pairs of numbers in an array that sum to a 
target.

Input: Array, Number
Output: Array

Rules:
	- Sort the pairs in ascending order with respect to the smaller number
		- Each pair should be placed in Array as a subarray [num, num]
		- Each pair should be ordered [smaller, larger]
	- If no pairs are found, return an empty array [].
	- You are only allowed to use each number once in a pair.
	- Assume arguments will always be an Array and a Number (in that order)
		- Assume the Number will always be an integer (positive, 0, negative)
		- Assume the Array will only contain Integers as elements (positive, 0, negative)
		- Assume the Array will never be sparse.
		- Array can be mutated, if needed.
		- If the array is empty or has 1 element, return []
		- Array could contain duplicate values.
		
TEST CASES:
allPairs([2, 4, 5, 3], 7)
// ➞ [[2, 5], [3, 4]]

allPairs([5, 3, 9, 2, 1], 3) 
// ➞ [[1, 2]]

allPairs([4, 2, 1, 3], 12) 
// ➞ []

allPairs([-2, -4, -5, -3], -7) 
// ➞ [[-5, -2], [-4, -3]]

allPairs([-10, 1, -2, 3, 12, -2], -12) 
// ➞ [[-10, -2], [-2, 12]]

allPairs([-5, 3, 5, 2, 4, -2, 0, 0], 0) 
// ➞ [[-5, 5], [-2, 2], [0, 0]]

allPairs([4, 5, 1, 3, 6, 8], 9) 
// ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

allPairs([], 9) 
// ➞ []

allPairs([1], 9) 
// ➞ []

REQUIREMENTS:
	- until no pairs exist, keep removing pairs from the array
	- for each pair in pairs, sort the values in increasing values
	- sort pairs by each pair's smaller value.

DATA STRUCTURE:
	ARRAYS

ALGORITHM:
	LET FOUND_PAIR = TRUE
	LET PAIRS = []

	WHILE FOUND_PAIR
		FOUND_PAIR = FALSE
		FOR INDEX (0) => (LAST INDEX OF ARRAY) (I)
			LET FIRST_ELEMENT = ARR[INDEX]
			FOR INDEX (I + 1) => (LAST INDEX OF ARRAY) (J)
				LET SECOND_ELEMENT = ARR[J]
				IF (FIRST_ELEMENT + SECOND_ELEMENT === TARGET)
					REMOVE FIRST_ELEMENT AND SECOND_ELEMENT FROM ARRAY
					PUSH THOSE ELEMENTS TO PAIRS AS [FIRST_ELEMENT, SECOND_ELEMENT]
					FOUND_PAIR = TRUE
				IF FOUND_PAIR
					BREAK
			IF FOUND_PAIR
				BREAK
		
	PAIRS = MAP PAIRS SO THAT EACH PAIR'S SMALLER VALUE IS THE FIRST ELEMENT
	SORT PAIRS BY INCREASING ORDER IN RESPECT TO SMALLER VALUE (FIRST ELEMENT)

	RETURN PAIRS
*/

function allPairs(nums, target) {
	let foundPair = true;
	let pairs = [];

	while (foundPair) {
		foundPair = false;
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				let firstVal = nums[i];
				let secondVal = nums[j];
				if (firstVal + secondVal === target) {
					let pair = [firstVal, secondVal];
					pairs.push(pair);
					nums.splice(i, 1);
					nums.splice(j - 1, 1);
					foundPair = true;
				}
				if (foundPair) break;
			}
			if (foundPair) break;
		}
	}

	pairs.forEach(pair => pair.sort((a, b) => a - b));
	pairs.sort((pairA, pairB) => pairA[0] - pairB[0]);
	return pairs;
}

p = console.log;

p(allPairs([2, 4, 5, 3], 7))
// ➞ [[2, 5], [3, 4]]

p(allPairs([5, 3, 9, 2, 1], 3)) 
// ➞ [[1, 2]]

p(allPairs([-2, -4, -5, -3], -7)) 
// ➞ [[-5, -2], [-4, -3]]

p(allPairs([-10, 1, -2, 3, -14, 2], -12)) 
// ➞ [[-14, 2], [-10, -2]]

p(allPairs([-5, 3, 5, 2, 4, -2, 0, 0], 0)) 
// ➞ [[-5, 5], [-2, 2], [0, 0]]

p(allPairs([4, 5, 1, 3, 6, 8], 9)) 
// ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

p(allPairs([], 9)) 
// ➞ []

p(allPairs([1], 9)) 
// ➞ []

p(allPairs([4, 2, 1, 3], 12)) 
// ➞ []