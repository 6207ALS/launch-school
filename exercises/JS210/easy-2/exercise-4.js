// JS210 Exercises | Easy 2
// Exercise 4 - Fibonacci Number Location By Length

/*
PROBLEM:
Given a number, return the index of the first Fibonacci number that has a number
of digits equal to the argument.

Input: Number
Output: Number

Rules:
  - [1, 1, 2, 3, 5, 8, 13, 21, ...]
    - By definition, the first two numbers of the sequence are [1, 1]
  - Fibonacci sequence: each subsequent number is the sum of the two previous
    numbers.
  - The first Fibonacci number has an index of 1 (not 0)
  - "BigInt" integers should be used in the solution
    - append the letter n to any numbers you use in your solution: 1n, 
      1234567890123456789012345678901234567890n, and so on
  - Assume that the argument is always an integer greater than or equal to 2

TEST CASES:

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

REQUIREMENTS:
  - Function should iterate through Fibonacci sequence
    - Check to see if length of a fib number is equal to number argument
  - In order to determine next number in Fib Sequence, you need to know the
    previous two Fib numbers.
  - Use BigInts to handle large numbers

DATA STRUCTURE:
  - ARRAY: Store the Fibonacci sequence
  - Variables: Store the 2 Fibonacci Numbers

ALGORITHM:
  LET FIB1 = 1
  LET FIB2 = 1
  LET INDEX = 2n

  WHILE LENGTH OF FIB2 IS NOT EQUAL TO INTEGER ARGUMENT
    LET TEMP = FIB2
    FIB2 = FIB1 + FIB2
    FIB1 = TEMP
    INCREMENT INDEX

  RETURN INDEX
*/

function findFibonacciIndexByLength(fibLength) {
  let fib1 = 1n;
  let fib2 = 1n;
  let index = 2n;

  while (BigInt(String(fib2).length) !== fibLength) {
    let temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
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