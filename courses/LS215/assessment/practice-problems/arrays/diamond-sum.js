// LS216 Practice Problems
// Diamond Sum

/*
https://edabit.com/challenge/RshdnFm4jcRWZrQAC

PROBLEM:
Given an nxn grid of consecutive numbers, return the grid's Diamond Sum.

Input: Number
Output: Number

Rules:
	- The diamond sum is defined as the sum of the numbers making up the diagonals
		between adjacent sides.
		- Diagonals span from the middle of one side to the middle of an adjacent side.
		- The numbers that lie at the diagonals are added to the Diamond Sum.
	- n is always an odd number.
		- Assume argument of the function will always be a positive, odd integer
	- Each element of nxn grid should be increments of 1
		- Reading from left-right, top-bottom
		- Starts from 1
		- Ends at n * n

TEST CASES:
// 3
[
  [1, _, 3],
  [_, 5, _],
  [7, _, 9]
]

1, 1
0, 2
1, 1

// 5
[
  [1, 2, _, 4, 5],
  [6, _, 8, _, 10],
  [_, 12, 13, 14, _],
  [16, _, 18, _, 20],
  [21, 22, _, 24, 25]
]

2, 2
1, 3
0, 4
1, 3
2, 2

// 7
[
  [ 1,  2,  3,  _,  5,  6,   7],
  [ 8,  9,  _,  11,  _, 13, 14],
  [15,  _, 17,  18, 19,  _, 21],
  [_,  23, 24,  25, 26, 27,  _],
  [29,  _, 31,  32, 33,  _, 35]
	[36, 37,  _,  39,  _, 41, 42]
	[43, 44, 45,   _, 47, 48, 49]
]

4 + 10 + 12 + 16 + 20 + 22 + 28 + 30 + 34 + 38 + 40 + 46

1st 2nd
3, 	3
2, 	4
1, 	5
0, 	6
1, 	5
2, 	4
3, 	3

REQUIREMENTS:
	- Construct N x N matrix of Numbers
		- Each subarray should be increments of 1
	- Calculate indexes to record for each row of matrix
		- First element of row: [FLOOR(N / 2), 1] + [0] + [1, FLOOR(N / 2)]
		- Second element of row: [FLOOR(N / 2), (N - 2)] + [N - 1] + [(N - 2), FLOOR(N / 2)]

	- initialize running-sum	
	- For each index of array argument
		- Add value at "1st" index and "2nd" index to running-sum
			- If value at "1st" index and "2nd" index are the same, only add one to 
				running-sum

DATA STRUCTURE:
	- ARRAY

ALGORITHM:

MAIN(N)
	LET MATRIX = CREATE_MATRIX(N)

	LET 1ST_VALUE_INDEXES = 1ST_VALUE_INDEXES
	LET 2ND_VALUE_INDEXES = 2ND_VALUE_INDEXES

	SUM = 0

	FOR INDEX 0 -> LENGTH OF VALUE_INDEXES
		LET VALUE_1 = MATRIX[INDEX][1ST_VALUE_INDEXES[INDEX]]
		LET VALUE_2 = MATRIX[INDEX][2ND_VALUE_INDEXES[INDEX]]
		IF (VALUE_1 AND VALUE_2 ARE SAME) 
			ADD ONLY VALUE_1 TO SUM
		ELSE
			ADD BOTH VALUE_1 AND VALUE_2 TO SUM

CREATE MATRIX (N)
	LET MATRIX = []
	FOR 1 -> N TIMES (I)
		LET ROW = []
		FOR (J = (I * N) - (N - 1) ; J <= (I * N); J++))

	RETURN MATRIX

1ST_VALUE_INDEXES(N)
	LET FIRST_HALF = []
	FOR VALUES (FLOOR(N/2) -> 1)
		PUSH VALUE TO FIRST_HALF

	RETURN [FIRST_HALF] + [0] + [FIRST_HALF REVERSED]

2ND_VALUE_INDEXES(N)
	LET FIRST_HALF = []
	FOR VALUES (FLOOR(N / 2) --> (N - 2))
		PUSH VALUE TO FIRST_HALF

	RETURN [FIRST_HALF] + [N - 1] + [FIRST_HALF REVERSED]
*/

function diamondSum(n) {
	let matrix = makeMatrix(n);
	let firstValueIndexes = returnFirstIndexes(n);
	let secondValueIndexes = returnSecondIndexes(n);
	let sum = 0;

	for (let i = 0; i < firstValueIndexes.length; i++) {
		let value1 = matrix[i][firstValueIndexes[i]];
		let value2 = matrix[i][secondValueIndexes[i]];
		sum += (value1 === value2) ? value1 : (value1 + value2);
	}

	return sum;
}

function returnFirstIndexes(n) {
	let firstHalf = [];
	for (let i = Math.floor(n / 2); i >= 1; i--) firstHalf.push(i);
	return firstHalf.concat([0], firstHalf.slice().reverse());
}

function returnSecondIndexes(n) {
	let firstHalf = [];
	for (let i = Math.floor(n / 2); i <= (n - 2); i++) firstHalf.push(i);
	return firstHalf.concat([n - 1], firstHalf.slice().reverse());
}

function makeMatrix(n) {
	let matrix = [];

	for (let i = 1; i <= n; i++) {
		let row = [];
		for (let j = ((i * n) - (n - 1)); j <= (i * n); j++) {
			row.push(j);
		}
		matrix.push(row);
	}

	return matrix;
}

p = console.log;
p(diamondSum(1));
p(diamondSum(3));
p(diamondSum(5));
p(diamondSum(7));