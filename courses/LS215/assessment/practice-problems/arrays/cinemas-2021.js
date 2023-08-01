// LS216 Practice Problems
// Cinemas in 2021

/*
https://edabit.com/challenge/p7gLw52gxdKENTkcP

PROBLEM:
Define a function that, when given an array of seats, returns the maximum number 
of new people which can be seated, as long as there is at least a gap of 2 
seats between people.

Input: Array
Output: Number

RULES:
	- Empty seats are represented as 0.
	- Occupied seats are represented as 1.
	- Don't move any seats which are already occupied, even if they are less than 
		2 seats apart. 
		- Consider only the gaps between new seats and existing seats.
	- There could be several combinations for assigning new seats, however, they
		will never affect the results.

	- Assume argument will always be a single Array.
		- Array will only contain the Numbers 1 and 0 as elements.
			-	Array could contain ONLY 0s.
			- Array could contain ONLY 1s.
		- Array will never be sparse.
		- Array can be mutated, if needed.
		- Minimum length of Array is 1 Number.
			- If Number is 1, return 0
			- If Number is 0, return 1

TEST CASES:
maximumSeating([1]) ➞ 0
maximumSeating([0]) ➞ 1

maximumSeating([1, 0]) ➞ 0
maximumSeating([0, 0]) ➞ 1

maximumSeating([0, 0, 0]) ➞ 1
maximumSeating([1, 0, 0]) ➞ 0

maximumSeating([1, 0, 0, 1]) ➞ 2
// [1, 0, 0, 1]

maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.

maximumSeating([1, 0, 0, 1, 0, 0, 1, 0, 0, 1]) ➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

REQUIREMENTS:
	- Initialize a counter for new assigned seats.
	- Iterate through each element in array arg.
		- If element is 1, continue to next element
		- If element is 0, look at next 2 values and previous 2 values.
			- If NONE of those values are 1 
				- Increment counter by 1.
				- Reassign current element to 1


DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET COUNTER = 0;

	FOR EACH ELEMENT OF ARRAY ARGUMENT
		IF ELEMENT IS 1
			CONTINUE TO NEXT ELEMENT
		ELSE IF ELEMENT IS 0
			LET NEIGHBORS = [ELEMENT AT INDEX - 1, ELEMENT AT INDEX - 2, ELEMENT AT INDEX + 1, ELEMENT AT INDEX + 2]
			IF ANY VALUE IN NEIGHBORS IS 1
				CONTINUE TO NEXT ELEMENT
			ELSE
				REASSIGN CURRENT ELEMENT TO 1
				COUNTER++
	
	RETURN COUNTER
*/

function maximumSeating(arr) {
	let counter = 0;

	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		if (element === 1) {
			continue;
		} else if (element === 0) {
			let neighbors = [arr[i - 2], arr[i - 1], arr[i + 1], arr[i + 2]];
			if (neighbors.every(val => val !== 1)) {
				counter++;
				arr[i] = 1;
			} else {
				continue;
			}
		}
	}

	return counter;
}

p = console.log;

p(maximumSeating([1]) )
// ➞ 0
p(maximumSeating([0])) 
// ➞ 1

p(maximumSeating([1, 0])) 
// ➞ 0

p(maximumSeating([0, 0])) 
// ➞ 1

p(maximumSeating([0, 0, 0]))
// ➞ 1
p(maximumSeating([1, 0, 0]))
// ➞ 0

p(maximumSeating([0, 0, 0, 0])) 
// ➞ 2
// [1, 0, 0, 1]

p(maximumSeating([1, 0, 0, 0, 0, 1])) 
// ➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.

p(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])) 
// ➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]