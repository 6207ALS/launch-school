/*
The function fibonacci refactors the recursive version to use memoization,.an
approach that involves saving a computed answer for future reuse, instead of 
computing it from scratch every time it is needed. In the case of a recursive 
fibonacci function, using memoization saves calls to fibonacci(nth - 2) because 
the necessary values have already been computed by the recursive calls to 
fibonacci(nth - 1).

The program first constructs an object containing the first two Fibonacci 
numbers, each key representing a certain iteration number. Regarding the 
fibonacci function, it first checks if the object has its argument's number as 
its key. If it does, return the value of that key. If not, it creates a new key
with that number, and its value is the sum of fibonacci(nth - 1) and 
fibonacci (nth - 2).    
*/

let series = {
  1: 1,
  2: 1,
};

function fibonacci(n) {
  if (series[n]) {
    return series[n];
  } else {
    series[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return series[n];
  }
}

// test cases
console.log(fibonacci(5));
console.log(fibonacci(35));
console.log(fibonacci(45));