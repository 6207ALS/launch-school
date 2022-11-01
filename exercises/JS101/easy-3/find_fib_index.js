/*
The findFibonacciIndexByLength calculates and returns the index of the first 
Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

The function progresses an array of the Fibonacci sequence and checks for the #
of digits of every new entry. If the new entry's # of digits is the same as the 
argument, its index is returned. 
*/

function findFibonacciIndexByLength(length) {
  let fibonacciSeq = [1n, 1n];
  let currentLength = 1n;

  while (currentLength < length) {
    let previousNum = fibonacciSeq[fibonacciSeq.length - 1];
    let otherPreviousNum = fibonacciSeq[fibonacciSeq.length - 2];
    fibonacciSeq.push(BigInt(previousNum + otherPreviousNum)); 
    currentLength = fibonacciSeq[fibonacciSeq.length - 1].toString().length;
  }

  return BigInt(fibonacciSeq.length);
}

// test cases
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
