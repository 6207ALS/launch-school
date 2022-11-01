/*
The fibonacci function eschews from using recursion to determine the nth 
Fibonacci number. It is rewritten as a non-recursive (or procedural) function.

The function first intializes a list of the first two Fibonacci numbers: 1 and
1. For (nth - 2) iterations, the second element of the list is reassigned to 
store the sum of the two numbers (the original second element is reassigned as
the first element).  
*/

function fibonacci (n) {
  let series = [1, 1];
  for (let i = 0; i < n - 2; i++) {
    series = [series[1], series[0] + series[1]];
  }
  return series[1];
}

// test cases
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050