/*
The fibonacci function computes the nth Fibonacci number, where nth is an 
argument passed to the function.

The function first determines its base case, the point where a value is returned
instead of executing another recursive call. For the Fibonacci series, the base 
case is when the series is at its first or second iteration. In the function, 
1 is returned when 1 or 2 is passed as the argument. If the argument
is not 1, the function returns the sum of fibonacci(n - 1) and fibonacci(n - 2),
the sum of the last two Fibonacci numbers.   
*/

function fibonacci(n) {
  if ( n === 1 | n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// test cases
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765