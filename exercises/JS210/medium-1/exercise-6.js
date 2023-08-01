// JS210 Exercises | Medium 1
// Exercise 6 - Fibonacci Number Location By Length

/*
PROBLEM:
Write a function that calculates and returns the index of the first Fibonacci 
number that has the number of digits specified by the argument. 

Input: BigInt
Output: BigInt

Rules:
	- The first Fibonacci number has an index of 1.
	- Assume that the argument is always an integer greater than or equal to 2.
	- The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
		such that the first two numbers are 1 by definition,
			- Each subsequent number after the first two is the sum of the two 
				previous numbers.
	- To use BigInt integers in your solution, simply append the letter n to any 
		numbers you use in your solution: 1n, 123476n
	- Argument represents number of digits to search for in Fibonacci sequence
	- Output represents the index at which that number exists in the sequence.
	- Assume there is no max value for argument.
	- Each function call is independent from each other
		- Each call should have its own record of the Fibonacci Sequence

TEST CASES:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

REQUIREMENTS:
	- Initialize the Fibonacci Sequence
		- [1 -> [1 -> [2 -> [3 -> [5 -> [8 -> 13]
	- Progress the Fibonacci Sequence (WINDOW SLIDE), until the second fibonacci 
		number is the length specified in argument.
	- Keep track of index of second number in Fibonacci Window.
	
DATA STRUCTURE:
	- Variables

ALGORITHM:
	LET FIB1 = 1;
	LET FIB2 = 1;
	LET INDEX = 2;

	WHILE FIB2'S LENGTH IS NOT THE SAME AS THE ARGUMENT
		LET NEXT_FIB = SUM OF FIB1 AND FIB2
		FIB1 = FIB2
		FIB2 = NEXT_FIB
		INDEX++
	
	RETURN INDEX
*/

function findFibonacciIndexByLength(length) {
	let fib1 = 1n;
	let fib2 = 1n;
	let index = 2n;

	while (BigInt(String(fib2).length) !== length) {
		let nextFib = fib1 + fib2;
		fib1 = fib2;
		fib2 = nextFib;
		index++;
	}

	return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n); 
console.log(findFibonacciIndexByLength(16n) === 74n); 
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);