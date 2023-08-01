// JS210 Exercises | Medium 2
// Exercise 6 - Sum Square - Square Sum

/*
PROBLEM:
Write a function that computes the difference between the square of the sum of 
the first n positive integers and the sum of the squares of the first n 
positive integers.

Input: Number
Output: Number

Rules:
	- Assume the argument will always be a number (integer)
	- The sum of squares for first "n" integers should be substracted FROM the
		sum of first "n" integers squared.

TEST CASES:
sumSquareDifference(0);      // 0

(0)**2 - (0)

sumSquareDifference(3);      
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

sumSquareDifference(10);     
// 2640 --> (1+2+3+4+5+6+7+8+9+10)**2 - (1**2 + 2**2 + 3**2 + 4**2 + 5**2 + 6**2 + 7**2 + 8**2 + 9**2 + 10**2)

sumSquareDifference(1);      // 0
// 0 --> (1)**2 - (1**2) -> 1 - 1 -> 0

sumSquareDifference(100);    // 25164150

REQUIREMENTS:
	- Calculate the sum of the first "n" positive integers
		- Square the sum
	- Calculate the sum of the squares of the first "n" positive integers

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	let sum = 0;
	let squareSum = 0;

	FOR I IN RANGE(1, N)
		ADD VALUE OF I TO sum
		ADD VALUE OF I^2 TO squareSum

	let sumSquared = sum ^ 2

	return sumSquared - squareSum;
*/

function sumSquareDifference(n) {
	let sum = 0;
	let squareSum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
		squareSum += i ** 2;
	}

	return (sum ** 2) - (squareSum);
}

console.log(sumSquareDifference(0));			// 0
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150